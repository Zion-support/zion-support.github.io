

const fetcher = (url: string) => fetch(url).then(r => r.json()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc
  }, {} as Record<string, string>);
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest'


  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } }
  }



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

  return (
    <EnhancedLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>


              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (


                  <td className="px-3 py-2 font-medium">{d.id}</td>
                  <td className="px-3 py-2">{d.talentUserId}</td>
                  <td className="px-3 py-2">{d.clientUserId}</td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                  <td className="px-3 py-2 flex gap-2">


                  </td>
                </tr>


}

import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components / layout / EnhancedLayout';
import Link from 'next / link';
import type { GetServerSideProps } from 'next';
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split (';').reduce (
    (acc: any, part: string) => {
      const [k, v] = part.trim ().split ('=');
      if (acc[k] = decodeURIComponent (v || '')) {
  $2
}
      return acc;
    },
    {} as Record < string, string>);
  let role = 'guest';



            </tbody>;
          </table>;
        </div>;
      </div>;





  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}






