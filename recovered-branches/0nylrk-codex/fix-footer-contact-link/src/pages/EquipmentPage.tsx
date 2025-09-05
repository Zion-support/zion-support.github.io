import React from 'react',
const EquipmentPage = () => {
  return (
    <div className=&quot;container mx-auto px-4 py-8&quot;>
      <h1 className=&quot;text-3xl font-bold mb-6&quot;>Equipment</h1>
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>        {/* Equipment listing placeholder */}
        <div className=&quot;bg-white rounded-lg shadow p-6&quot;>
          <h2 className=&quot;text-xl font-semibold mb-2&quot;>Coming Soon</h2>
          <p className=&quot;text-gray-600&quot;>
            Our equipment listing section is currently under development. Check back soon for available equipment.
          </p>
        </div>
      </div>
    </div>
  )
},

export default EquipmentPage,