
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
ratingOptions: [1, 2, 3, 4, 5] // Add rating options 
}
};

