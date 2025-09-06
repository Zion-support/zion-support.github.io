<<<<<<< HEAD

import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
type TalentItem = {
  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;
}
type Props = { items: TalentItem[] }
=======
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd()
    "public"
    "automations"
    "top-talents.json"
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
    items = data.items |[];
  } catch {}
  return { props: { items } }
}
export default TopTalentsPage;

=======
  )
},
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = [],
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    const data = JSON.parse(raw),
    items = data.items || []
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: { items }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default TopTalentsPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
