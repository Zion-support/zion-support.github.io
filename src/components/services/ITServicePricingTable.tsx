import React from 'react';

export function ITServicePricingTable() {
  const pricingData = [
    {
      service: "Hardware Installation",
      description: "Installation of computers, servers, and networking equipment",
      basePrice: "$150",
      additionalHour: "$75",
      notes: "Includes first hour of service"
    },
    {
      service: "Software Configuration",
      description: "Setup and configuration of operating systems and applications",
      basePrice: "$120",
      additionalHour: "$60",
      notes: "Includes first hour of service"
    },
    {
      service: "Network Troubleshooting",
      description: "Diagnosis and resolution of network connectivity issues",
      basePrice: "$180",
      additionalHour: "$90",
      notes: "Includes first hour of service"
    },
    {
      service: "Data Recovery",
      description: "Recovery of lost or corrupted data from storage devices",
      basePrice: "$200",
      additionalHour: "$100",
      notes: "Complex cases may require additional time"
    },
    {
      service: "Security Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      basePrice: "$300",
      additionalHour: "$150",
      notes: "Includes detailed report"
    }
  ];

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zion-blue-light">
              <th className="py-3 px-4 text-zion-cyan font-semibold">Service</th>
              <th className="py-3 px-4 text-zion-cyan font-semibold">Description</th>
              <th className="py-3 px-4 text-zion-cyan font-semibold">Base Price</th>
              <th className="py-3 px-4 text-zion-cyan font-semibold">Additional Hour</th>
              <th className="py-3 px-4 text-zion-cyan font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="border-b border-zion-blue-light/30 hover:bg-zion-blue/20 transition-colors">
                <td className="py-3 px-4 text-white font-medium">{item.service}</td>
                <td className="py-3 px-4 text-zion-slate-light">{item.description}</td>
                <td className="py-3 px-4 text-zion-cyan font-semibold">{item.basePrice}</td>
                <td className="py-3 px-4 text-zion-slate-light">{item.additionalHour}</td>
                <td className="py-3 px-4 text-zion-slate-light text-sm">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-zion-blue/20 rounded-lg border border-zion-cyan/30">
        <h4 className="text-zion-cyan font-semibold mb-2">Important Notes:</h4>
        <ul className="text-zion-slate-light text-sm space-y-1">
          <li>• All prices include transportation costs within the service area</li>
          <li>• Base price covers the first hour of onsite service</li>
          <li>• Additional hours are billed at the specified rate</li>
          <li>• Emergency service calls may incur additional fees</li>
          <li>• Travel outside the service area may require additional charges</li>
        </ul>
      </div>
    </div>
  );
}