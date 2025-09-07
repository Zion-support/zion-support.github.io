export interface SearchSuggestion {
  text: string;
  type: "product" | "category" | "tag" | "skill" | "person" | "recent";
  iconUrl?: string;
}
<<<<<<< HEAD
export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}
export interface FilterOptions {
  productTypes: {
    label: string;
    value: string;
  }[];
=======
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}  }[];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  locations: {
    label: string;
    value: string;
  }[];
  availabilityOptions: {
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}
<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface SearchSuggestion {;

}
;
<<<<<<< HEAD
}

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
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
;
export interface SearchSuggestion {
  text: string;
}
