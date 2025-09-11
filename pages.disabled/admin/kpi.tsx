import dynamic from 'next/dynamic' 
 
const KpiDashboard = dynamic(() => import('../../components/dashboard/KpiDashboard'), { 
  ssr: false, 
}) 
 
export default function AdminKpiPage(...args: any[]): any { 
  return ( 
    <KpiDashboard admin       /> 
  ) 
}