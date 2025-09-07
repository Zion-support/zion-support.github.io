import Link from 'next/link';
import type { GetServerSideProps } from 'next';
import type { Vendor } from '../../utils/vendor-types';

type Props = any;
export default function VendorsPage({ vendors }: Props) {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Vendors</h1>
        <Link href='/vendors/register'>
          <a className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>
