const fs = require('fs');
const path = require('path');

// Fix InnovativeMicroSaasServices.tsx
const filePath = path.join(__dirname, 'src', 'pages', 'InnovativeMicroSaasServices.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix property access issues by using safe property access
content = content.replace(
  /service\.title/g,
  "('title' in service ? service.title : service.name)"
);

content = content.replace(
  /service\.currency/g,
  "('currency' in service ? service.currency : (service.price && typeof service.price === 'object' ? service.price.currency : '$'))"
);

content = content.replace(
  /service\.pricingModel/g,
  "('pricingModel' in service ? service.pricingModel : (service.price && typeof service.price === 'object' ? service.price.pricingModel : 'monthly'))"
);

content = content.replace(
  /service\.tags/g,
  "('tags' in service ? service.tags : [])"
);

content = content.replace(
  /service\.supportLevel/g,
  "('supportLevel' in service ? service.supportLevel : 'standard')"
);

content = content.replace(
  /service\.estimatedDelivery/g,
  "('estimatedDelivery' in service ? service.estimatedDelivery : '2-4 weeks')"
);

content = content.replace(
  /service\.innovationLevel/g,
  "('innovationLevel' in service ? service.innovationLevel : 'High')"
);

// Fix the formatPrice function call
content = content.replace(
  /formatPrice\(service\.price, service\.currency\)/g,
  "formatPrice(('price' in service && typeof service.price === 'number' ? service.price : (service.price && typeof service.price === 'object' ? service.price.monthly : 0)), ('currency' in service ? service.currency : (service.price && typeof service.price === 'object' ? service.price.currency : '$')))"
);

fs.writeFileSync(filePath, content);
console.log('Fixed InnovativeMicroSaasServices.tsx');