            OpenAI, Google Vertex, custom PyTorch/TensorFlow, and serve via
            scalable APIs.
          </p>"
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link"
              href="/case-studies""
              className="text-blue-600 hover: text-blue-700 underline"
            >
              Case Studies
            </Link>
            <Link"
              href="/pricing""
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Pricing
            </Link>
            <Link"
              href="/contact""
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>"
      <section className="bg-gray-50 border-t border-b border-gray-100">"
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-6 max-w-6xl">
          {[
            {"
              titl,
    e: 'AI Strategy Sprint',
              desc: '2-week discovery to identify high-ROI AI use cases, data readiness, and risk.',
              price: '$6,000–$12,000' }, {'
              title: 'Custom LLM Apps',
              desc: 'Retrieval-Augmented Generation, chatbots, agents, tools, and workflows.',
              price: '$15,000–$60,000+' }, {'
              title: 'Vision & Speech',
              desc: 'OCR, document AI, speech-to-text, image/video analysis.',
              price: '$12,000–$50,000+' }, {'
              title: 'Model Fine-tuning',
              desc: 'Domain fine-tuning, evaluation, red-teaming, guardrails.',
              price: '$8,000–$35,000+' }, {'
              title: 'MLOps & Observability',
              desc: 'CI/CD for models, monitoring, drift detection, governance.',
              price: '$10,000–$45,000+' }, {'
              title: 'Data Pipelines',
              desc: 'ETL/ELT, vector databases, feature stores, data quality.',
              price: '$8,000–$40,000+' } ].map(item => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            >"
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>"
              <p className="mt-2 text-gray-600">{item.desc}</p>"
              <p className="mt-4 text-gray-900 font-medium">
                Typical budget: {item.price}
              </p>

            </div>
          ));
        </div>

            'OpenAI',
            'Gemini',
            'Cohere',
            'HuggingFace',
            'PyTorch',
            'TensorFlow',
            'LangChain',
            'LlamaIndex',
            'Supabase',
            'Postgres',
            'Pinecone',
            'Weaviate' ].map(t => (
            <div
              key={t}
              className="px-3 py-2 bg-gray-100 text-gray-800 rounded-md text-center"
            >
              {t}
            </div>
          ));
        </div>
      </section>"
      <section className="bg-gray-50">"
        <div className="container mx-auto px-4 py-12 max-w-5xl">"
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Getting Started
          </h2>"
          <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-2">
            <li>Book a 30-minute discovery call.</li>
            <li>We propose an architecture, scope, and timeline.</li>
            <li>Rapid prototype within 1–2 weeks iterate to production.</li>
          </ol>"
          <div className="mt-6">
            <Link"
              href="/contact""
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Talk to an AI architect
            </Link>

          </div>
        </div>
      </section>
    </div>

