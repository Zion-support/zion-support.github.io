</div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Automation Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item
            title="RPA & Process Automation"
            details={[
              'UiPath, Automation Anywhere, Blue Prism',
              'Process mining and discovery tools',
              'Screen scraping and data extraction',
              'API integration and orchestration',
              'Exception handling and error recovery',
              'Performance monitoring and analytics',
            ]}
          />
          <Item
            title="AI & Machine Learning"
            details={[
              'Natural language processing (NLP)',
              'Computer vision and image recognition',
              'Predictive analytics and forecasting',
              'Decision trees and rule engines',
              'Machine learning model integration',
              'Cognitive automation platforms',
            ]}
          />
          <Item
            title="Integration & Orchestration"
            details={[
              'API management and integration',
              'Workflow orchestration engines',
              'Event-driven automation',
              'Microservices architecture',
              'Cloud-native automation',
              'Real-time monitoring and alerting',
            ]}
          />
      </div>
      </section>

      <Pricing />
      <ContactSection />
      </div>
  );
