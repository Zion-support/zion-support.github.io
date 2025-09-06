

export interface SearchSuggestion {
export interface SearchSuggestion {;
  text: string;






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


    label: string
    value: string
    label: string,
    value: string;

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
export interface SearchSuggestion {;

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
export interface FilterOptions {
  productTypes: {

    label: string
    value: string
  }[];




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

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



}
;

