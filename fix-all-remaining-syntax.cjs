#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixGraphqlFile() {
    this.log('🔧 Fixing pages/api/docs/graphql.ts...');
    
    const graphqlContent = `import { NextApiRequest, NextApiResponse } from 'next';

const typedefs = [
  'type Query {',
  '  hello: String',
  '  user(id: ID!): User',
  '}',
  'type User {',
  '  id: ID!',
  '  name: String',
  '  email: String',
  '}'
];

function toSDL() {
  return typedefs.join('\\n');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(toSDL());
}`;

    try {
      fs.writeFileSync('pages/api/docs/graphql.ts', graphqlContent);
      this.fixedFiles.push('pages/api/docs/graphql.ts');
      this.log('✅ Fixed pages/api/docs/graphql.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/docs/graphql.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/docs/graphql.ts: ${error.message}`, 'ERROR');
    }
  }

  fixEnterpriseFiles() {
    this.log('🔧 Fixing enterprise API files...');
    
    // Fix pages/api/enterprise/companies.ts
    const companiesContent = `import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, slug, logoUrl, brandColor, plan } = req.body || {};
    
    if (!name || !slug) {
      return res.status(400).json({ error: 'Name and slug are required' });
    }

    const company = store.createCompany({
      name,
      slug,
      logoUrl,
      brandColor,
      plan: plan || 'basic'
    });

    return res.status(201).json(company);
  }

  if (req.method === 'GET') {
    const companies = store.listCompanies();
    return res.status(200).json(companies);
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/enterprise/companies.ts', companiesContent);
      this.fixedFiles.push('pages/api/enterprise/companies.ts');
      this.log('✅ Fixed pages/api/enterprise/companies.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/enterprise/companies.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/enterprise/companies.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/enterprise/companies/[companyId]/activity.ts
    const activityContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const company = store.getCompany(companyId);
    if (!company) return res.status(404).json({ error: 'company_not_found' });
    
    return res.status(200).json(company.activity || []);
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/enterprise/companies/[companyId]/activity.ts', activityContent);
      this.fixedFiles.push('pages/api/enterprise/companies/[companyId]/activity.ts');
      this.log('✅ Fixed pages/api/enterprise/companies/[companyId]/activity.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/enterprise/companies/[companyId]/activity.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/enterprise/companies/[companyId]/activity.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/enterprise/companies/[companyId]/billing/invoices.ts
    const invoicesContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  
  if (!companyId || Array.isArray(companyId)) {
    return res.status(400).json({ error: 'Invalid company ID' });
  }

  if (req.method === 'GET') {
    const invoices = store.listInvoices(companyId);
    return res.status(200).json(invoices);
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/enterprise/companies/[companyId]/billing/invoices.ts', invoicesContent);
      this.fixedFiles.push('pages/api/enterprise/companies/[companyId]/billing/invoices.ts');
      this.log('✅ Fixed pages/api/enterprise/companies/[companyId]/billing/invoices.ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/enterprise/companies/[companyId]/billing/invoices.ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/enterprise/companies/[companyId]/billing/invoices.ts: ${error.message}`, 'ERROR');
    }

    // Fix pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts
    const invoiceContent = `import { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../../utils/data/enterpriseStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId, invoiceId } = req.query;
  
  if (!companyId || Array.isArray(companyId) || !invoiceId || Array.isArray(invoiceId)) {
    return res.status(400).json({ error: 'Invalid company ID or invoice ID' });
  }

  if (req.method === 'GET') {
    const invoice = store.getInvoice(companyId, invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }
    
    return res.status(200).json(invoice);
  }

  if (req.method === 'POST' && req.query.action === 'download') {
    const invoice = store.getInvoice(companyId, invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    // Generate PDF buffer (placeholder)
    const pdfBuffer = Buffer.from('PDF content placeholder');
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="invoice-' + invoiceId + '.pdf"');
    res.status(200).send(pdfBuffer);
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}`;

    try {
      fs.writeFileSync('pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts', invoiceContent);
      this.fixedFiles.push('pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts');
      this.log('✅ Fixed pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts', 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts: ${error.message}`);
      this.log(`❌ Failed to fix pages/api/enterprise/companies/[companyId]/billing/invoices/[invoiceId].ts: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting All Remaining Syntax Fix...');
    this.log('='.repeat(60));

    this.fixGraphqlFile();
    this.fixEnterpriseFiles();

    // Generate report
    this.log('\n📊 ALL REMAINING SYNTAX FIX REPORT');
    this.log('='.repeat(60));
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Successfully fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors encountered:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalFixed: this.fixedFiles.length,
      totalErrors: this.errors.length
    };

    fs.writeFileSync('all-remaining-syntax-fix-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Report saved to all-remaining-syntax-fix-report.json');

    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new SyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = SyntaxFixer;
