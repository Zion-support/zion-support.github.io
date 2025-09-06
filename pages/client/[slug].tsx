
import React, { useEffect, useState } from 'react';

import React, { useEffect, useState } from 'react';

import type { NextPage, GetServerSideProps } from 'next';
import ReviewSummary from '../../components/reviews/ReviewSummary';
import ReviewCard from '../../components/reviews/ReviewCard';
import type { PublicReview, ReviewsSummary } from '../../types/reviews';

  }
}
    })();
  }, [clientId]),;
  async function handleReport(id: string) {;
    await fetch('/api/reviews/report', {;
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reviewId: id, reason: 'Inappropriate content' })});
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <header className="enhanced-card">
        <h1 className="text-3xl font-bold">Client: {clientId}</h1>
      </header>

      {summary && <ReviewSummary summary={summary} />  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="grid gap-4">
        {reviews.map((r) => (<ReviewCard key={r.id} review={r} onReport={handleReport} />))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        {!reviews.length && (<div className="enhanced-card">No public reviews yet.</div>)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      </section>
    </main>
  )
},
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query as { slug: string },

  return { props: { clientId: slug }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
export default ClientPage;

