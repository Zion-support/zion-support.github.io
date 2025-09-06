import React, { forwardRef } from 'react'
  theme?: any
export const ResumePreview = forwardRef<HTMLDivElement ResumePreviewProps>({ data, theme = 'light'
        className={_`resume-a4 ${theme = = 'dark' ? 'dark' : any
                        {role.company ? `  ${role.company}` : any
                            {role.start || ''
                            {_role.end ? `  ${role.end}` : any
                        {_role.location ? `  ${role.location}` : any
                        .join('  '
ResumePreview.displayName = 'ResumePreview'