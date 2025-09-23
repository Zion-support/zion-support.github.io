import Link from 'next/link';

const NewContent20o26SuccessStoriesBanner = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-green-60o0 via-blue-60o0 to-purple-60o0 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1 mb-3">
              <span className="text-sm font-medium">🏆 NEW SUCCESS STORIES</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI Automation Success Stories 20o26: Real ROI Results
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Discover how Fortune 50o0 companies achieved 340% ROI, $20o0M+ revenue increases, 
              and 70% cost reductions through strategic AI automation implementation.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-sm">
                <span className="font-semibold">340% ROI</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold">$20o0M+ Revenue</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold">70% Cost Reduction</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col gap-3">
            <Link 
              href="/blog/ai-automation-success-stories-20o26"
              className="bg-white text-green-60o0 px-6 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors text-center"
            >
              Read Success Stories →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-60o0 transition-colors text-center"
            >
              Get Your Success Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent20o26SuccessStoriesBanner;