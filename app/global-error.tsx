"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };)
    reset: () => void;
}) {
  return (
    <html></htm>
      <body></bod>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center"></div>
          <div className="text-center"></div>
            <h2 className="text-2 xl font-bold text-gray-900 mb-4"></h2></<<<h2>Something</h2></<<h2>went</h2> wrong!<button
              onClick={() =>reset()}</button></<<<butto>className</butto></butto>="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            ></<<<button>Try</button></<<button>again</button></button>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
