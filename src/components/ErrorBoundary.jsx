import React, { useState, useEffect } from 'react';''
import { useNavigate } from 'react-router-dom';''
import { motion } from 'framer-motion';''
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';'
function ErrorFallback({ error, resetError }) {}
  const navigate = useNavigate();

  return (')
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">"
</div>"
      <div className="max-w-md w-full text-center">"
</div>"
        <div className="mb-6">"
</div>"
          <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
            <AlertTriangle className="w-10 h-10 text-zion-purple" />"
</AlertTriangle>
          </div>"
          <h1 className="text-2xl font-bold text-white mb-2">"
</h1>
          </h1>"
          <p className="text-zion-slate-light">"
</p>
          </p>
        </div>"
          <details className="mb-6 text-left">"
</details>"
            <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">"
</summary>
            </summary>"
            <div className="bg-zion-slate-dark p-3 rounded text-xs text-zion-slate-light overflow-auto">"
</div>
              <pre>{error.stack}</pre>
            </div>
          </details>"
        <div className="space-y-3">"
</div>
          <button;
            onClick={resetError}"
            className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-md flex items-center justify-center""
          >
</button>"
            <RefreshCw className="w-4 h-4 mr-2" />"
</RefreshCw>
          </button>

          <button;);
            onClick={() => navigate(-1)};
</button>"
            <ArrowLeft className="w-4 h-4 mr-2" />"
</ArrowLeft>
          </button>

          <a;"
            href="/"""
            className="block w-full px-4 py-2 text-center border border-zion-purple text-zion-purple rounded-md hover:bg-zion-purple hover:text-white transition-colors""
          >
</a>"
            <Home className="w-4 h-4 inline mr-2" />"
</Home>
          </a>
        </div>
"
        <div className="mt-6 text-xs text-zion-slate-light">"
</div>
          <p>If this problem persists, please contact our support team.</p>"
          <p className="mt-1">"
</p>
          </p>
        </div>
      </div>
    </div>
    return <ErrorFallback error={error} resetError={resetError} />;
</ErrorFallback>"