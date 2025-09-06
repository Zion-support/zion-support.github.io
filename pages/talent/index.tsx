import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState  } from 'react';
import Pagination from '../../components/ui/Pagination';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';
interface Talent {
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {;
  id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
      <h1 className='text-2xl font-semibold'>Explore Talent</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pageItems.map(t => (
          <article key={t.id} className='border rounded-md p-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <h3 className='font-semibold'>{t.name}</h3>
              <div className='flex gap-1'>
                {t.badges.map(b => (                  <TrustBadge key={b} type={b} />
                ))}
      <h1 className="text-2xl font-semibold">Explore Talent</h1>

      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
        {pageItems.map((t) => (
          <article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="flex gap-1">
                {t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
            </div>
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial
                quote={t.testimonial.quote}
                author={t.testimonial.author}
              />            )}
          </article>
        ))}
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
    </div>
  )

export default TalentDirectory;

}
              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </article>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
      <Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />;
    </div>;
  );
},;
export default TalentDirectory;
