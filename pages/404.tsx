export default function Custom404() {
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >,
          {/* 404 Animation */}
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0];
              }}
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse""
              }}
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">"
            <Link;
              href="/"";
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"";
            >;
              <Home className="w-5 h-5" />";
              Go Home;
            </Link>;
            <button;
              onClick={() => window.history.back()}
  );
}