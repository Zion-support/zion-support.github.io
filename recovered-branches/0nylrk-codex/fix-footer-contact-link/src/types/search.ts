
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  after: string;
}
export interface FilterOptions {
  product_types: {
    label: string,
    value: string;
  }[];
<<<<<<< HEAD




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
;
