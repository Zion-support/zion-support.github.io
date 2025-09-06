
<<<<<<< HEAD

  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
}

  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {

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

  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
=======
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
export interface SearchHighlight {
  before: string;
  match: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  after: string;
}
export interface FilterOptions {
  product_types: {
    label: string,
    value: string;
  }[];
<<<<<<< HEAD
  ratingOptions: number[];

}
;

=======
  locations: {
    label: string,
    value: string;
  }[];
  availability_options: {
    label: string,
    value: string;
  }[];
  rating_options: number[];

}
=======


export interface SearchSuggestion {;

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
