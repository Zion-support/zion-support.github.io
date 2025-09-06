

import React, { useState, useEffect } from 'react';

import Head from 'next / head';
;

interface Partner {

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
interface Partner {
interface Partner {;
  id: string;
  code: string;
  name: string;
  status: 'active' | 'inactive' | 'pending';
  commission: number;


const mockPartners: Partner[] = [;
  {;
    id: '1',;
    code: 'PART001',;
    name: 'Tech Solutions Inc.',;
    status: 'active',;
    commission: 15,;
    contactEmail: 'contact@techsolutions && techsolutions.com',;
    contactPhone: '+1-555-0123',;
    joinedAt: '2024-01-15T00:00:00Z',;
    lastActivity: '2025-01-15T10:30:00Z',;
    totalReferrals: 25,;
    totalEarnings: 12500;
  },;
  {;
    id: '2',;
    code: 'PART002',;
    name: 'Digital Marketing Pro',;
    status: 'active',;
    commission: 12,;
    contactEmail: 'hello@digitalmarketingpro && digitalmarketingpro.com',;
    contactPhone: '+1-555-0456',;
    joinedAt: '2024-03-20T00:00:00Z',;
    lastActivity: '2025-01-14T16:45:00Z',;
    totalReferrals: 18,;
    totalEarnings: 8750;
  },;
  {;
    id: '3',;
    code: 'PART003',;
    name: 'Cloud Services LLC',;
    status: 'pending',;
    commission: 10,;
    contactEmail: 'info@cloudservices && cloudservices.com',;
    contactPhone: '+1-555-0789',;
    joinedAt: '2025-01-10T00:00:00Z',;
    lastActivity: '2025-01-10T00:00:00Z',;
    totalReferrals: 0,;
    totalEarnings: 0;
  }
];
const AdminPartnersPage: React.FC = () => {;

  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

    const json = await res.json();
    setFlags(json.flags |[]);



import { useEffect, useState } from 'react';
export default function AdminPartners() {
  const [partners, setPartners] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>('');
  const [flags, setFlags] = useState<any[]>([]);
useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/admin/partners/list');
        const json = await res.json();
        setPartners(json.partners || [])
      } catch {}
    })()
  }, []);
  async function updatePartner(code: string, updates: any) {
    await fetch('/api/admin/partners/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, ...updates })});
    const res = await fetch('/api/admin/partners/list');
    const json = await res.json();
    setPartners(json.partners || [])
  }
  async function viewFlags(code: string) {
    setSelected(code);
    const res = await fetch(`/api/admin/partners/fraud-flags?code=${encodeURIComponent(code)}`);
    const json = await res.json();
    setFlags(json.flags || [])
  }
  useEffect(() => {;
    // Simulate loading partners;
    setTimeout(() => {;
      setPartners(mockPartners);
      setLoading(false);
    }, 1000);  }, []);
  async function updatePartner(): any (code: string, updates: any) {;
    await fetch('/api/admin/partners/update', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ code, ...updates }),;
    });
    const res = await fetch('/api/admin/partners/list');

    const json = await res.json();
    setPartners(json.partners || []);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  async function viewFlags(code: string) {;
    setSelected(code);
    const res = await fetch(`/api/admin/partners/fraud-flags?code=${encodeURIComponent(code)}`);



    const json = await res.json();
    setFlags(json.flags || []);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


  return (