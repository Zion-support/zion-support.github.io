import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib / utils';
import { use_wishlist } from '@/hooks / use_wishlist';
import { use_auth } from '@/hooks / use_auth';
import { toast } from '@/hooks / use - toast';
import { LoginModal } from '@/components / auth / LoginModal';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components / ui / tooltip';
interface FavoriteButtonProps {
  item_id: string;
  class_name?: string;
export /**
 * FavoriteButton - Function description
 */
function FavoriteButton() {
  const { is_wishlisted, toggle } = use_wishlist ();
  const { is_authenticated } = use_auth ();
  const [login_open, setLoginOpen] = React.useState (false);
  const handle_click = (e: React.MouseEvent) =>: any {
    e.stop_propagation ();    // Check condition
if ( {) {
  $2
}
      setLoginOpen (true);
      return;
    }
    const was_wishlisted = is_wishlisted (item_id);
    toggle (item_id);
    // Provide feedback;
    toast ({
      title: was_wishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      description: was_wishlisted;
        ? 'Item has been removed from your wishlist';
        : 'Item has been added to your wishlist',
    });
  }
  const active = is_wishlisted (item_id);
  return (
    <>;
      <TooltipProvider>;
        <Tooltip>;
          <TooltipTrigger as_child>;
            <button;
              class_name = {cn (
                'absolute top - 2 right - 2 z - 10 p - 2 rounded - full bg - zion - blue - dark / 80 hover:bg - zion - blue - light / 30 transition - colors',
                class_name)}
              on_click={handle_click}
              aria - label={
                active ? 'Remove from favorites' : 'Save to favorites';
              }            >;
              <Heart;
                class_name = {cn (
                  'h - 4 w - 4 transition - transform duration - 200',
                  active;
                    ? 'fill - red - 500 text - red - 500 scale - 110';
                    : 'text - zion - slate')}              />;
            </button>;
          </TooltipTrigger>;
          {!is_authenticated && <TooltipContent > Login required</TooltipContent>}
        </Tooltip>;
      </TooltipProvider>;
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>);
}
      // Add to favorites`;
      // console.log (`Added ${item_type} ${item_id} to favorites`)}  }
  return ();
    <button;
      on_click = {handleToggleFavorite}`;
      className={`absolute top - 2 right - 2 p - 2 rounded - full transition - all duration - 300 ${is_favorited';
          ? 'bg - red - 500 hover:bg - red - 600 text - white'';
          : 'bg - zion - blue - dark / 80 hover:bg - zion - cyan text - white'`;
} ${class_name}`}
      aria - label={is_favorited ? 'Remove from favorites' : 'Add to favorites'}
    >;
      <Heart`;
        className={`w - 4 h - 4 transition - all duration - 300 ${
          is_favorited ? 'fill - current' : ''`;
}`}
      />    </button>)}`;
class_name: {`w - 4 h - 4 transition - all duration - 300 ${
          is_favorited ? 'fill - current' : '';`;
}`}
      />;
    </button>) }
'`;
}