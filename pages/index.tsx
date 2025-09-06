            });
          }}
        />
      </Head>
      <ErrorBoundary level="page">
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics);
          }}
        /> */}
  );
}
;