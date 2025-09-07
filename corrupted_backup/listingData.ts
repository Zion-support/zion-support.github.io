
reviewCount: 58;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 98 
};
rating: 4.8;
reviewCount: 32;
location: "North America";
availability: "4-6 Weeks";
aiScore: 92 
};
rating: 4.7;
reviewCount: 18;
featured: true;
location: "Global";
availability: "2-3 Weeks";
aiScore: 95 
};
rating: 4.6;
reviewCount: 124;
location: "Global";
availability: "Immediate";
aiScore: 88 
};
rating: 4.5;
reviewCount: 47;
location: "North America";
availability: "1-2 Weeks";
aiScore: 90 
};
rating: 4.8;
reviewCount: 36;
featured: true;
location: "Global";
availability: "Immediate";
aiScore: 94 
}];
//Generate search suggestions based on existing listings ];

  return {
  productTypes: productTypes.map (type => ({
  label: type, value: type 
}) );
locations: locations.map (location => ({
  label: location, value: location 
}) );
availabilityOptions: availability.map (item => ({
  label: item, value: item 
}) );
ratingOptions: [1, 2, 3, 4, 5] 
}
};

