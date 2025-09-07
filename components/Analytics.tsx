import React from 'react'
interface AnalyticsProps {
  trackingId: string
const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  if($2) {
    return null
  return($2) {dataLayer.push(arguments);}
            gtag('js', new Date())
            gtag('config', '${trackingId}')
          `,
        }}
      />
    </>
  )
}
export default Analytics
