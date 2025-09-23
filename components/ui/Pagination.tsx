import EnhancedButton from './EnhancedButton';

export type PaginationProps ={
  page: number;
  pageSize: number;
  total: number;
  onChange: (nextPage: number) => void;
};

