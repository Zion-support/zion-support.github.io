"use client";
import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
  performance: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}


  useEffect(() => {
    // Simulate analytics data fetching
    const fetchAnalyticsData = async () => {
      setIsLoading(true);
      
      
      setAnalyticsData(mockData);
      setIsLoading(false);
    };

          </div>
        </div>
      </div>
    );
  }

        </div>

            </div>
          </div>
        </div>

            </div>
          </div>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
}