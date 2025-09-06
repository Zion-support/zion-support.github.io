export interface NextGenInnovativeService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];
  market_size: string;
  growth_rate: string;
  variant: string;
  contact_info: {
    mobile: string;
    email: string;
    address: string;

    website: string;
  }

  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;    mobile: string,
    email: string,
    address: string,
    website: any
  }
  realImplementation: any
export const nextGenInnovativeServices: NextGenInnovativeService[] = [
  //