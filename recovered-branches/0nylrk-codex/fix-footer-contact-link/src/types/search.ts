
<<<<<<< HEAD
<<<<<<< HEAD
export interface SearchSuggestion {
=======
export interface SearchSuggestion {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
}
<<<<<<< HEAD
export interface SearchHighlight {
=======

export interface SearchHighlight {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {
<<<<<<< HEAD

    label: string
    value: string
=======
    label: string,
    value: string;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }[];
  locations: {
    label: string
    value: string
  }[];
  availabilityOptions: {
    label: string

    value: string
  }[];
  ratingOptions: number[]
<<<<<<< HEAD
}
=======
export interface SearchSuggestion {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
