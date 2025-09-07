
import React, { useMemo, useState } from 'react';
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2  } from 'lucide-react';
import { buildPrintableHtml  } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
const initialProject: BookProject;

                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};