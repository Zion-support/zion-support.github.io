

import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
type TalentItem = {
  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;

};

type Props = { items: TalentItem[] };


=======
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Top Talents — Auto Generated</h1>
      <div className="grid gap-3">
        {items.map((t) => (
          <Link key={t.talentSlug} href={`/talent/${t.talentSlug}`}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between">
              <div>
                <div className="font-medium">{t.talentName}</div>
                <div className="text-sm text-gray-600">{t.averageRating.toFixed(1)}★ • {t.totalReviews} reviews</div>
              </div>
              <span className="pill">Auto</span>
            </div>
          </Link>
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {!items.length && <div className="enhanced-card">No data yet.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>
    </main>

  )
},
export const getServerSideProps: GetServerSideProps = async () => {

export default TopTalentsPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
