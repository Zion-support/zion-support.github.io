export interface SearchSuggestion {
<<<<<<< HEAD
  text: string,
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
=======
export interface SearchSuggestion {;

  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

>>>>>>> merged-prs-20250907-203621
  iconUrl?: string

  text: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface SearchSuggestion {
export interface SearchSuggestion {;
  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
}
export interface SearchHighlight {

export interface SearchHighlight {;
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
}
<<<<<<< HEAD
;
=======
export interface SearchSuggestion {;
  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  locations: {
=======
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
export interface SearchHighlight {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  before: string;
  match: string;

  after: string;
}
export interface FilterOptions {}
  productTypes: {};
    label: string;
    value: string;
  }[];

;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}  }[];

  locations: {
<<<<<<< HEAD

    label: string;
    value: string;
  }[];
  availabilityOptions: {}
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    label: string,
    value: string;
  }[];
  availability_options: {
    label: string,
    value: string;
  }[];
  rating_options: number[];

<<<<<<< HEAD
=======
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface SearchSuggestion {;

}
;
<<<<<<< HEAD

}
;

=======
<<<<<<< HEAD
}

export interface SearchSuggestion {;
  text:string,;
  type:'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?:string;
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface SearchHighlight {;
  before:string,;
  match:string,;
  after:string;
}
;
export interface FilterOptions {;
  productTypes:{;
    label:string,;
    value:string;
  }[],;
  locations:{;
    label:string,;
    value:string;
  }[],;
  availabilityOptions:{;
    label:string,;
    value:string;
  }[],;
  ratingOptions:number[];
} 
}
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
}
;
<<<<<<< HEAD

;
export interface SearchSuggestion {
  text: string;
}
=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
