import React from "react";
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600"},
    return colorMap[color] || 'bg-gray-100 text-gray-600;
}

  return (;
    <MainLayout title = "Our Products - Zion Tech Group;
      description="Explore our innovative technology products including AI platforms, blockchain solutions, IoT management, and cybersecurity tools.">;
      {/* comment */}";
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">";
        <div className="container mx-auto px-4">";
          <div className="text-center">";
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Our Products</h1>";
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">;
              Innovative technology products designed to solve complex business challenges and drive digital transformation.;
            </p>;
          </div>;
      </section>;
      {/* comment */}";
      <section className="py-20">";
        <div className="container mx-auto px-4">";
          <div className="grid lg: grid-cols-2 gap-12">,
            {products.map((product, index) => {;
              const IconComponent = product.icon;
              return (";
                <div key = "{index}" className="bg-white rounded-lg p-8 shadow-lg hover: shadow-xl transition-shadow">";
                  <div className="{"flex" items-start mb-6">",
                    <div className="{"w-16" h-16 rounded-lg flex items-center justify-center mr-6 ${getColorClasses(product.color)}"}>";
                      <IconComponent className=""h-8" w-8"}       />;
                    </div>";
                    <div className="flex-1">";
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>";
                      <p className="text-gray-600 text-lg">{product.description}</p>;
                    </div>;
                  ";
                  <div className="mb-6">";
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features: </h4>";
                    <ul className="space-y-2">,
                      {product.features.map((feature, featureIndex) => (";
                        <li key="{featureIndex}" className="flex items-center text-gray-600">";
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"  />;