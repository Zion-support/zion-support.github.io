function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Translator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional services and solutions tailored to your needs.
            </p>
            <div className="mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-4">Service Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our ai translator service provides cutting-edge solutions designed to meet your specific requirements. 
                  We combine industry expertise with innovative technology to deliver exceptional results.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <div className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-lg">
                    Professional Service
                  </div>
                  <div className="bg-green-600/20 text-green-300 px-4 py-2 rounded-lg">
                    Expert Support
                  </div>
                  <div className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg">
                    Custom Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;