
export interface SearchSuggestion {;
  text:string,;
  type:'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?:string;
}
;
export interface SearchHighlight {;
  before:string,;
  match:string,;
  after:string;
}
<<<<<<< HEAD
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
=======

export interface FilterOptions {
  productTypes: {
    label: string,
    value: string
  }[],
  locations: {
    label: string,
    value: string
  }[],
  availabilityOptions: {
    label: string,
    value: string
  }[],
  ratingOptions: number[]}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
