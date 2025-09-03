import React from "react";

interface DataPoint {
  id: string;
  label: string;
  value: number;
  color?: string;
}

interface ChartData {
  title: string;
  data: DataPoint[];
  type: "bar" | "line" | "pie" | "doughnut";
}

const AdvancedDataVisualization: React.FC = () => {
  const chartData: ChartData[] = [
    {
      title: "Project Performance",
      type: "bar",
      data: [
        { id: "1", label: "E-commerce", value: 85, color: "#3B82F6" },
        { id: "2", label: "Mobile App", value: 72, color: "#10B981" },
        { id: "3", label: "Website", value: 91, color: "#F59E0B" },
        { id: "4", label: "Dashboard", value: 78, color: "#EF4444" },
      ],
    },
    {
      title: "Resource Allocation",
      type: "pie",
      data: [
        { id: "1", label: "Development", value: 45, color: "#8B5CF6" },
        { id: "2", label: "Design", value: 25, color: "#06B6D4" },
        { id: "3", label: "Testing", value: 20, color: "#84CC16" },
        { id: "4", label: "Management", value: 10, color: "#F97316" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Data Visualization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform complex data into intuitive visual insights with our advanced analytics platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {chartData.map((chart, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{chart.title}</h3>
              
              {chart.type === "bar" && (
                <div className="space-y-4">
                  {chart.data.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">{item.label}</span>
                        <span className="text-gray-900 font-semibold">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color || "#3B82F6",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {chart.type === "pie" && (
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full" viewBox="0 0 42 42">
                      <circle
                        cx="21"
                        cy="21"
                        r="15.915"
                        fill="transparent"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      {chart.data.map((item, itemIndex) => {
                        const total = chart.data.reduce((sum, d) => sum + d.value, 0);
                        const percentage = (item.value / total) * 100;
                        const strokeDasharray = `${percentage} ${100 - percentage}`;
                        const strokeDashoffset = chart.data
                          .slice(0, itemIndex)
                          .reduce((sum, d) => sum + (d.value / total) * 100, 0);
                        
                        return (
                          <circle
                            key={item.id}
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke={item.color || "#3B82F6"}
                            strokeWidth="3"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={-strokeDashoffset}
                            transform="rotate(-90 21 21)"
                          />
                        );
                      })}
                    </svg>
                  </div>
                  <div className="ml-8 space-y-2">
                    {chart.data.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div
                          className="w-4 h-4 rounded mr-3"
                          style={{ backgroundColor: item.color || "#3B82F6" }}
                        ></div>
                        <span className="text-gray-700">{item.label}</span>
                        <span className="ml-auto text-gray-900 font-semibold">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Detailed Analytics
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedDataVisualization;