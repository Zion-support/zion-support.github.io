import React from 'react';

interface AnalyticsProps {
  trackingId: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
        }}
      />
    </>
  );
};

export default Analytics;