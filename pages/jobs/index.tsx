
import Link from 'next/link',
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard',

  const jobs = [
    { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', subtitle: 'Remote • Contract', description: 'Build and optimize LLM-powered features in production.' },
    { slug: 'mlops-specialist', title: 'MLOps Specialist', subtitle: 'Remote • Part-time', description: 'Design pipelines for training/inference at scale.' }],

  return (

    <div className="space-y-4">
      <InteractiveSearch placeholder="Search jobs, keywords, or companies..." />
      {loading ? (
        <EnhancedLoading lines={4} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>
              <a>
                <EnhancedMarketplaceCard title={j.title} subtitle={j.subtitle} description={j.description} footer={<span className="text-blue-600">View Job →</span>} />

            </Link>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


}

=======
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
