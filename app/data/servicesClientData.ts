// Generated before Next compilation; never import the complete catalog here.
// Preserve the existing consumer type without creating a runtime dependency.
import type { Service } from './servicesData';

const allServices = require('./servicesClientData.generated.json') as readonly Service[];

export type { Service };
export { allServices };
export default allServices;
