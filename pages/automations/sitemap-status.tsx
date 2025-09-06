import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
type Props = $2;
const SitemapStatus: NextPage<Props> = ({ urlCount }) => {
  return (
    <main className = $2;
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicsitemap.xml'),
  let urlCount = $2;
  try {
    const raw = fs.readFileSync($2);
    urlCount = $2;
export default SitemapStatus,