import { use State, use Ref, use Effect} from 'react';
import { X } from 'lucide-react';

interface Search Bar Props {
  on Search?: (query: string) => void;
  placeholder?: string;
  class Name?: string;
}

const Search Bar: React.F C<S earch Bar Props /> = ({
  on Search,
  const placeholder = "Search services...",
  class Name = ""
}) => {
  const [query, set Query] = use State('');
  const [is Open, set Is Open] = use State(false);
  const input Ref = use Ref<H T M LInput Element />(null);
  use Effect(() => {
    if (is Open && input Ref.current) {
      input Ref.current.focus();
    }
  }, [is Open]);

  const handle Search = (e: React.Form Event) => {
    e.prevent Default();
    if (query.trim() && on Search) {
      on Search(query.trim());
    }
  };

  const handle Clear = () => {
    set Query('');
    set Is Open(false);
    if (input Ref.current) {
      input Ref.current.blur();
    }
  };

  return (

    <d iv const class Name = {`relative ${class Name}`} />
      <f orm on Submit="{handle Search}" class Name="r elative" />
        <d iv class Name="r elative">
          <S earch class Name="a bsolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
          <i nput
            ref="{input Ref}"
            type="text"
            value="{query}"
            on Change="{(e)" = /> set Query(e.target.value)}
            on Focus="{()" => set Is Open(true)}
            placeholder="{placeholder}"
            class Name="w-f ull pl-10 pr-10 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparenttransition-allduration-300"
          />
          {query && (
            <b utton
              type="button"
              on Click="{handle Clear}"
              class Name="a bsolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400hover:text-whitetransition-colors" />

              <X c lass Name="w-4h-4" / />
            </b utton>
          )}

        </d iv>
      </f orm>

      {/* Search suggestions dropdown */}
      {is Open && (

        <d iv class Name="a bsolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg borderborder-white/20z-50">
        </d iv>
          <d iv class Name="p-4">
        </d iv>
            <p c lass Name="t ext-smtext-gray-600mb-2">Popular searches:</p>
            <d iv class Name="s pace-y-1">
        </d iv>
              {['A I Services', 'Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics'].map((suggestion) => (
                <b utton
                  key="{suggestion}"
                  on Click="{()" =>{
                    set Query(suggestion);
                    if (on Search) on Search(suggestion);
                    set Is Open(false);
                  }}
                  const class Name="w-f ull text-left px-3 py-2 text-sm text-gray-700 hover:bg-purple-50rounded-mdtransition-colors"
                >
                  {suggestion}
                </b utton>
              ))}

            </d iv>
        </d iv>
      )}
    </d iv>
  );
};

export default Search Bar;
