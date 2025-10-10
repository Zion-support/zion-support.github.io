



}
          {error.message || 'An unexpected error occurred'}

        {process.env['NODE_ENV'] === 'development' && (;}

        )}
        <div className="mt-6 flex gap-4"></div>
          </pre>
          <button
          </div>
            onClick={resetError}
              strokeWidth={2}
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
          </button>
            />
          </button>
          </svg>
          </button>
        </div>
          </button>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">Connection Issue</h2>
          </button>
        <p className="mt-2 text-center text-gray-600">
          </h2>
          Unable to connect to the server. Please check your internet connection and try again.
          </p>
        </p>
          </p>
        <div className="mt-6"></div>
          </p>
          <button
          </div>
            onClick={resetError}
  }
  if (error.message.includes('404') || error.message.includes('not found')) {
          </button>
    return 'notFound';}
  }
  if (error.message.includes('timeout')) {
          </button>
    return 'timeout';}
  }
  if (error.message.includes('500') || error.message.includes('server')) {
          </button>
    return 'serverError';}
  }
  if (error.message.includes('validation')) {
          </button>
    return 'validation';}
  }
  return 'default'
          </button>
}
