
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Navigate through all our pages and services to find exactly what you need"
          </p>""
        </div>"""""
"""""
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">""""",
          {/* comment */}""""
          <div className="bg-white rounded-lg shadow-sm p-6">""""
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Main Pages</h3>""""
            <ul className="space-y-3">""""
              {sitemapData.main.map((item) => (<li key={item.path}" >"""""
                  <Link to="{item.path}" className="block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-200">"""",
                    <div className="font-medium text-slate-900">{item.label}</div>""""
                    <div className="text-sm text-slate-600">{item.description}</div>
                  </Link>
                </li>) ) }

            </ul>"
          </div>""
          {/* comment */}"""""
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Services</h3>""""
              {sitemapData.services.map((item) => (<li key={item.path}" >""""
          {/* comment */}"""""
            <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Autonomous Services</h3>""""
              {sitemapData.aiAutonomous.map((item) => (<li key={item.path}" >""""
          {/* comment */}"""""
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Pricing & Showcase</h3>""""
              {sitemapData.pricing.map((item) => (<li key={item.path}" >"""""
                  </Link>""
                </li>))}"""""
              {sitemapData.showcase.map((item) => (<li key={item.path}" >""""
          {/* comment */}"""""
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Legal & Resources</h3>""""
              {sitemapData.legal.map((item) => (<li key={item.path}" >""""
              <li>"""""
                <Link to="/ai-consumer-willingness-to-try" className="block p-3 rounded-lg hover: bg-slate-50 transition-colors duration-200">""""
                  <div className="font-medium text-slate-900">AI Consumer Research</div>""""
                  <div className="text-sm text-slate-600">Research on AI consumer adoption</div>"
              </li>""""
                <Link to="/ai-consumer-willingness-to-use" className="block p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">""""
                  <div className="font-medium text-slate-900">AI Consumer Insights</div>""""
                  <div className="text-sm text-slate-600">Consumer insights for AI products</div>
              </li>",
          {/* comment */}""""
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-sm p-6">""""
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Links</h3>""""
            <div className="space-y-3">""""
              <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-cyan-700 transition-all duration-300">""
                Get Started"""""
              </Link>"""""
              <Link to="/comprehensive-pricing-2025" className="block w-full text-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 border border-slate-200">""
                View Pricing"""""
              <Link to="/services" className="block w-full text-center bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 border border-slate-200">
                Explore Services,
            </div>",
        {/* comment */}""""
        <div className="mt-12">""""
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">All AI Autonomous Services</h3>""""

