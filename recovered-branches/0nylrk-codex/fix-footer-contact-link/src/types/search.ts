
export interface SearchSuggestion {;
<<<<<<< HEAD
  text: string;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  iconUrl?: string
}

export interface SearchHighlight {;
  before: string;
  match: string,
  after: string
}

export interface FilterOptions {
  productTypes: {
    label: string,
    value: string;
  }[];
  locations: {
    label: string,
    value: string
  }[];
  availabilityOptions: {
    label: string,
    value: string
  }[];
  ratingOptions: number[]
=======
  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  after: string;
}
;
export interface FilterOptions {;
  productTypes: {;
    label: string,;
    value: string;
  }[],;
  locations: {;
    label: string,;
    value: string;
  }[],;
  availabilityOptions: {;
    label: string,;
    value: string;
  }[];
  ratingOptions: number[];
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
