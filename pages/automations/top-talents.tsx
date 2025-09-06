import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number},

type Props = $2;
const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className = $2;
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = [],
  try {
    const raw = fs.readFileSync($2);
    const data = JSON.parse($2);
    items = $2;
export default TopTalentsPage,