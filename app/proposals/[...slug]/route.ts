// Dynamic route to serve proposal PDFs from automation/proposals/
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const filename = slug.join('/');
  
  // Security: only allow .pdf and .json files from proposals dir
  if (!filename.endsWith('.pdf') && !filename.endsWith('.json')) {
    return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
  }

  const proposalsDir = path.join(process.cwd(), 'automation', 'proposals');
  const filePath = path.join(proposalsDir, filename);

  if (!filePath.startsWith(proposalsDir)) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 });
  }

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const contentType = filename.endsWith('.pdf') ? 'application/pdf' : 'application/json';
  
  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': filename.endsWith('.pdf') ? `inline; filename="${filename}"` : 'inline',
      'Cache-Control': 'private, max-age=300'
    }
  });
}
