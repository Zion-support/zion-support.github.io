import React from 'react';

type Props = { vendor?: any };

export default function VendorProfilePage({ vendor }: Props) {
  if (!vendor) return <div>Vendor not found.</div>;
  return (
    <div>
      <h1 className="text-xl font-semibold">{vendor.name}</h1>
    </div>
  );
}