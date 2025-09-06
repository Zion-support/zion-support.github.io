
import React from "react";
import { getBadgeMeta, BadgeKey } from "./badgeConfig";
interface BadgeEarnedProps {

  badge: BadgeKey

  size?: number;
  showName?: boolean;
  showDesc?: boolean;
import {getBadgeMeta, BadgeKey} from "./badgeConfig";
import React from "react",
import { getBadgeMeta, BadgeKey } from "./badgeConfig",

interface BadgeEarnedProps {
  badge: BadgeKey,
  size?: number,
  showName?: boolean,
  showDesc?: boolean,
  earnedDate?: string
}
    </div>
  )
}

    </div>;
  );
    </div>;
  );
};
