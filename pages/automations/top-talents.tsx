<<<<<<< HEAD
<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
<<<<<<< HEAD
type TalentItem = any;
=======
<<<<<<< HEAD

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
type TalentItem = {
  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;
<<<<<<< HEAD
}
type Props = { items: TalentItem[] }
=======
};

type Props = { items: TalentItem[] };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },
type Props = { items: TalentItem[] },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd()
    "public"
    "automations"
    "top-talents.json"
=======
};

type Props = { items: TalentItem[] };

const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Top Talents — Auto Generated</h1>
      <div className='grid gap-3'>
        {items.map(t => (
          <Link key={t.talentSlug} href={`/talent/${t.talentSlug}`}>
            <div className='enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between'>
              <div>
                <div className='font-medium'>{t.talentName}</div>
                <div className='text-sm text-gray-600'>
                  {t.averageRating.toFixed(1)}★ • {t.totalReviews} reviews
                </div>
              </div>
              <span className='pill'>Auto</span>
            </div>
          </Link>
        ))}
        {!items.length && <div className='enhanced-card'>No data yet.</div>}
      </div>
    </main>
  );
};
}

export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(
    process.cwd(),
    'public',
    'automations',
    'top-talents.json'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
<<<<<<< HEAD
    items = data.items |[];
  } catch {}
  return { props: { items } }
}
export default TopTalentsPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
=======

=======
  )
},
export const getServerSideProps: GetServerSideProps = async () => {
<<<<<<< HEAD
  const p = path.join(
    process.cwd(),
    "public",
    "automations",
    "top-talents.json",;
  );
  let items: TalentItem[] = [];
  try {
<<<<<<< HEAD
=======
    const raw = fs.readFileSync(p, "utf8");
    const data = JSON.parse(raw);
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    items = data.items || [];
  } catch {}
  return { props: { items } };
};
<<<<<<< HEAD
}

export default TopTalentsPage;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = [],
  try {
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default TopTalentsPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
