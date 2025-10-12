import React from 'react';
import {ArrowRight    } from 'lucide-react';
'useclient';
  ];
    <>;
              </span>;
              <br / />;
              <spanconstclassName = "text-white">Solutions</span>;
            </h1>;
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">;
              Transformyourbusinesswithouradvancedsystemmonitorsolutions.;
              Poweredbycutting-edgeAItechnologyandindustryexpertise.;
    <>;
            </p>;
            <divclassName="f l exflex-colsm: flex-rowgap-4justify-center">;
              <buttonclassName="b g-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300flexitems-center" />;
                GetStarted;
    <>;
                <ArrowRightclassName="m l-2h-5w-5" />;
              </button>;
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />;
                LearnMore;
  </;
    <>;
            </div>;
    </div>;
  )}
exportdefaultSystemMonitorPage;
  </button>;
}
;
interfaceSystemMonitorProps {onAlert?: (alert: string) => voidclassName?: string;
}
;
constSystemMonitor: React.FC<SystemMonitorProps /> = ({onAlert,;
  className = '';
}) => {const [metrics, setMetrics] = useState<SystemMetrics />({
    cpu: 0,;
    memory: 0,;
    disk: 0,;
    network: 0,;
    battery: 100,;
    uptime: 0;
  });
  const [isMonitoring, setIsMonitoring] = useState(false);
  constupdateMetrics = useCallback(() => {// SimulatesystemmetricsconstnewMetrics = {
      cpu: Math.random() * 100,;
      memory: Math.random() * 100,;
      disk: Math.random() * 100,;
      network: Math.random() * 100,;
      battery: Math.random() * 100,;
      uptime: Date.now() - performance.timing.navigationStart;
    }
;
    setMetrics(newMetrics);
    // Checkforalertsif (newMetrics.cpu > 90) {onAlert?.('HighCPUusagedetected');
    }
    if (newMetrics.memory > 90) {onAlert?.('Highmemoryusagedetected');
    }
    if (newMetrics.disk > 90) {onAlert?.('Highdiskusagedetected');
    }
  }, [onAlert]);
  useEffect(() => {if (isMonitoring) {
      constinterval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, updateMetrics]);
  consttoggleMonitoring = () => {setIsMonitoring(!isMonitoring);
    if (!isMonitoring) {
      updateMetrics();
    };
  };
    </>;
