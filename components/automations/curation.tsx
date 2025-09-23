type Experiment ={
  title: string;
  hypothesis?: string;
  metric?: string;
  effort?: number;
  impact?: number;
};

type Props ={
  updatedAt: string | null;
  items: Experiment[];
};

