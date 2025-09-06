export type Json =;
  | string;
  | number;
  | boolean;
  | null;
  | { [key:string]:Json | undefined }
  | Json[];
;
export type Database = {;
  public:{;
    Tables:{;
      ai_chats:{;
        Row:{;
          created_at:string;
          id:string;
          message:string;
          response:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          message:string;
          response:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          message?:string;
          response?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"ai_chats_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      analytics_events:{;
        Row:{;
          created_at:string | null;
          event_type:string;
          id:string;
          metadata:Json | null;
          path:string | null;
          session_id:string | null;
          user_id:string | null;
        }
        Insert:{;
          created_at?:string | null;
          event_type:string;
          id?:string;
          metadata?:Json | null;
          path?:string | null;
          session_id?:string | null;
          user_id?:string | null;
        }
        Update:{;
          created_at?:string | null;
          event_type?:string;
          id?:string;
          metadata?:Json | null;
          path?:string | null;
          session_id?:string | null;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"analytics_events_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      api_keys:{;
        Row:{;
          created_at:string;
          expires_at:string | null;
          id:string;
          is_active:boolean;
          key_hash:string;
          key_prefix:string;
          last_used_at:string | null;
          name:string;
          scopes:Database["public"]["Enums"]["api_key_scope"][];
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          is_active?:boolean;
          key_hash:string;
          key_prefix:string;
          last_used_at?:string | null;
          name:string;
          scopes?:Database["public"]["Enums"]["api_key_scope"][];
          user_id:string;
        }
        Update:{;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          is_active?:boolean;
          key_hash?:string;
          key_prefix?:string;
          last_used_at?:string | null;
          name?:string;
          scopes?:Database["public"]["Enums"]["api_key_scope"][];
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"api_keys_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      api_logs:{;
        Row:{;
          api_key_id:string | null;
          created_at:string;
          endpoint:string;
          id:string;
          ip_address:string | null;
          method:string;
          response_time_ms:number | null;
          status_code:number;
          user_agent:string | null;
          user_id:string | null;
        }
        Insert:{;
          api_key_id?:string | null;
          created_at?:string;
          endpoint:string;
          id?:string;
          ip_address?:string | null;
          method:string;
          response_time_ms?:number | null;
          status_code:number;
          user_agent?:string | null;
          user_id?:string | null;
        }
        Update:{;
          api_key_id?:string | null;
          created_at?:string;
          endpoint?:string;
          id?:string;
          ip_address?:string | null;
          method?:string;
          response_time_ms?:number | null;
          status_code?:number;
          user_agent?:string | null;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"api_logs_api_key_id_fkey";
            columns:["api_key_id"];
            isOneToOne:false;
            referencedRelation:"api_keys";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"api_logs_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      certifications:{;
        Row:{;
          created_at:string;
          credential_id:string | null;
          credential_url:string | null;
          expiration_date:string | null;
          id:string;
          issue_date:string | null;
          issuing_organization:string;
          name:string;
          resume_id:string;
        }
        Insert:{;
          created_at?:string;
          credential_id?:string | null;
          credential_url?:string | null;
          expiration_date?:string | null;
          id?:string;
          issue_date?:string | null;
          issuing_organization:string;
          name:string;
          resume_id:string;
        }
        Update:{;
          created_at?:string;
          credential_id?:string | null;
          credential_url?:string | null;
          expiration_date?:string | null;
          id?:string;
          issue_date?:string | null;
          issuing_organization?:string;
          name?:string;
          resume_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"certifications_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
      content:{;
        Row:{;
          content_type:string;
          content_url:string | null;
          created_at:string;
          creator_id:string;
          description:string | null;
          id:string;
          published:boolean | null;
          thumbnail_url:string | null;
          title:string;
          updated_at:string;
          views:number | null;
        }
        Insert:{;
          content_type:string;
          content_url?:string | null;
          created_at?:string;
          creator_id:string;
          description?:string | null;
          id?:string;
          published?:boolean | null;
          thumbnail_url?:string | null;
          title:string;
          updated_at?:string;
          views?:number | null;
        }
        Update:{;
          content_type?:string;
          content_url?:string | null;
          created_at?:string;
          creator_id?:string;
          description?:string | null;
          id?:string;
          published?:boolean | null;
          thumbnail_url?:string | null;
          title?:string;
          updated_at?:string;
          views?:number | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"content_creator_id_fkey";
            columns:["creator_id"];
            isOneToOne:false;
            referencedRelation:"profiles";
            referencedColumns:["id"];
          }];
      }
      contract_templates:{;
        Row:{;
          created_at:string;
          id:string;
          is_default:boolean | null;
          template_data:Json;
          title:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          is_default?:boolean | null;
          template_data:Json;
          title:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          is_default?:boolean | null;
          template_data?:Json;
          title?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"contract_templates_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      education:{;
        Row:{;
          created_at:string;
          degree:string;
          description:string | null;
          end_date:string | null;
          field_of_study:string | null;
          id:string;
          institution:string;
          institution_logo_url:string | null;
          is_current:boolean;
          location:string | null;
          resume_id:string;
          start_date:string;
          updated_at:string;
        }
        Insert:{;
          created_at?:string;
          degree:string;
          description?:string | null;
          end_date?:string | null;
          field_of_study?:string | null;
          id?:string;
          institution:string;
          institution_logo_url?:string | null;
          is_current?:boolean;
          location?:string | null;
          resume_id:string;
          start_date:string;
          updated_at?:string;
        }
        Update:{;
          created_at?:string;
          degree?:string;
          description?:string | null;
          end_date?:string | null;
          field_of_study?:string | null;
          id?:string;
          institution?:string;
          institution_logo_url?:string | null;
          is_current?:boolean;
          location?:string | null;
          resume_id?:string;
          start_date?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"education_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
      fraud_detection_reports:{;
        Row:{;
          action_taken_count:number;
          dangerous_count:number;
          false_positive_count:number;
          generated_at:string;
          id:string;
          report_data:Json | null;
          report_month:string;
          suspicious_count:number;
          total_flags:number;
        }
        Insert:{;
          action_taken_count?:number;
          dangerous_count?:number;
          false_positive_count?:number;
          generated_at?:string;
          id?:string;
          report_data?:Json | null;
          report_month:string;
          suspicious_count?:number;
          total_flags?:number;
        }
        Update:{;
          action_taken_count?:number;
          dangerous_count?:number;
          false_positive_count?:number;
          generated_at?:string;
          id?:string;
          report_data?:Json | null;
          report_month?:string;
          suspicious_count?:number;
          total_flags?:number;
        }
        Relationships:[];
      }
      fraud_flags:{;
        Row:{;
          action_taken:string | null;
          content_excerpt:string;
          content_id:string;
          content_type:string;
          gpt_classification:string | null;
          gpt_explanation:string | null;
          id:string;
          ip_address:string | null;
          is_false_positive:boolean | null;
          reason:string;
          reviewed_at:string | null;
          reviewed_by:string | null;
          severity:Database["public"]["Enums"]["fraud_severity"];
          status:string;
          timestamp:string;
          updated_at:string | null;
          user_email:string | null;
          user_id:string | null;
        }
        Insert:{;
          action_taken?:string | null;
          content_excerpt:string;
          content_id:string;
          content_type:string;
          gpt_classification?:string | null;
          gpt_explanation?:string | null;
          id?:string;
          ip_address?:string | null;
          is_false_positive?:boolean | null;
          reason:string;
          reviewed_at?:string | null;
          reviewed_by?:string | null;
          severity?:Database["public"]["Enums"]["fraud_severity"];
          status?:string;
          timestamp?:string;
          updated_at?:string | null;
          user_email?:string | null;
          user_id?:string | null;
        }
        Update:{;
          action_taken?:string | null;
          content_excerpt?:string;
          content_id?:string;
          content_type?:string;
          gpt_classification?:string | null;
          gpt_explanation?:string | null;
          id?:string;
          ip_address?:string | null;
          is_false_positive?:boolean | null;
          reason?:string;
          reviewed_at?:string | null;
          reviewed_by?:string | null;
          severity?:Database["public"]["Enums"]["fraud_severity"];
          status?:string;
          timestamp?:string;
          updated_at?:string | null;
          user_email?:string | null;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"fraud_flags_reviewed_by_fkey";
            columns:["reviewed_by"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"fraud_flags_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      hire_requests:{;
        Row:{;
          attachments:Json | null;
          budget_display:string | null;
          budget_max:number | null;
          budget_min:number | null;
          created_at:string;
          expiry_date:string | null;
          id:string;
          project_overview:string;
          project_summary:string | null;
          project_type:string | null;
          requester_email:string;
          requester_id:string | null;
          requester_name:string;
          status:string;
          talent_id:string;
          timeline:string;
          updated_at:string;
        }
        Insert:{;
          attachments?:Json | null;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          expiry_date?:string | null;
          id?:string;
          project_overview:string;
          project_summary?:string | null;
          project_type?:string | null;
          requester_email:string;
          requester_id?:string | null;
          requester_name:string;
          status?:string;
          talent_id:string;
          timeline:string;
          updated_at?:string;
        }
        Update:{;
          attachments?:Json | null;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          expiry_date?:string | null;
          id?:string;
          project_overview?:string;
          project_summary?:string | null;
          project_type?:string | null;
          requester_email?:string;
          requester_id?:string | null;
          requester_name?:string;
          status?:string;
          talent_id?:string;
          timeline?:string;
          updated_at?:string;
        }
        Relationships:[];
      }
      interviews:{;
        Row:{;
          client_id:string;
          created_at:string;
          duration_minutes:number;
          end_time:string | null;
          id:string;
          interview_type:string;
          meeting_link:string | null;
          meeting_platform:string | null;
          notes:string | null;
          reminder_sent:string | null;
          scheduled_date:string;
          status:string;
          talent_id:string;
          title:string | null;
          updated_at:string;
        }
        Insert:{;
          client_id:string;
          created_at?:string;
          duration_minutes?:number;
          end_time?:string | null;
          id?:string;
          interview_type?:string;
          meeting_link?:string | null;
          meeting_platform?:string | null;
          notes?:string | null;
          reminder_sent?:string | null;
          scheduled_date:string;
          status?:string;
          talent_id:string;
          title?:string | null;
          updated_at?:string;
        }
        Update:{;
          client_id?:string;
          created_at?:string;
          duration_minutes?:number;
          end_time?:string | null;
          id?:string;
          interview_type?:string;
          meeting_link?:string | null;
          meeting_platform?:string | null;
          notes?:string | null;
          reminder_sent?:string | null;
          scheduled_date?:string;
          status?:string;
          talent_id?:string;
          title?:string | null;
          updated_at?:string;
        }
        Relationships:[];
      }
      job_applications:{;
        Row:{;
          cover_letter:string | null;
          created_at:string | null;
          id:string;
          is_shortlisted:boolean | null;
          job_id:string;
          match_breakdown:Json | null;
          match_score:number | null;
          match_suggestion:string | null;
          match_summary:string | null;
          resume_id:string | null;
          scored_at:string | null;
          status:string;
          talent_id:string;
          viewed_at:string | null;
        }
        Insert:{;
          cover_letter?:string | null;
          created_at?:string | null;
          id?:string;
          is_shortlisted?:boolean | null;
          job_id:string;
          match_breakdown?:Json | null;
          match_score?:number | null;
          match_suggestion?:string | null;
          match_summary?:string | null;
          resume_id?:string | null;
          scored_at?:string | null;
          status?:string;
          talent_id:string;
          viewed_at?:string | null;
        }
        Update:{;
          cover_letter?:string | null;
          created_at?:string | null;
          id?:string;
          is_shortlisted?:boolean | null;
          job_id?:string;
          match_breakdown?:Json | null;
          match_score?:number | null;
          match_suggestion?:string | null;
          match_summary?:string | null;
          resume_id?:string | null;
          scored_at?:string | null;
          status?:string;
          talent_id?:string;
          viewed_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"job_applications_job_id_fkey";
            columns:["job_id"];
            isOneToOne:false;
            referencedRelation:"jobs";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"job_applications_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"job_applications_talent_id_fkey";
            columns:["talent_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      jobs:{;
        Row:{;
          budget:Json;
          category:string;
          client_id:string;
          created_at:string;
          deadline:string | null;
          description:string;
          id:string;
          skills:string[];
          status:string;
          title:string;
          updated_at:string;
        }
        Insert:{;
          budget?:Json;
          category:string;
          client_id:string;
          created_at?:string;
          deadline?:string | null;
          description:string;
          id?:string;
          skills?:string[];
          status?:string;
          title:string;
          updated_at?:string;
        }
        Update:{;
          budget?:Json;
          category?:string;
          client_id?:string;
          created_at?:string;
          deadline?:string | null;
          description?:string;
          id?:string;
          skills?:string[];
          status?:string;
          title?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"jobs_client_id_fkey";
            columns:["client_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      milestone_activities:{;
        Row:{;
          action:string;
          comment:string | null;
          created_at:string;
          id:string;
          milestone_id:string;
          new_status:string;
          previous_status:string | null;
          user_id:string;
        }
        Insert:{;
          action:string;
          comment?:string | null;
          created_at?:string;
          id?:string;
          milestone_id:string;
          new_status:string;
          previous_status?:string | null;
          user_id:string;
        }
        Update:{;
          action?:string;
          comment?:string | null;
          created_at?:string;
          id?:string;
          milestone_id?:string;
          new_status?:string;
          previous_status?:string | null;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"milestone_activities_milestone_id_fkey";
            columns:["milestone_id"];
            isOneToOne:false;
            referencedRelation:"project_milestones";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"milestone_activities_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      notification_preferences:{;
        Row:{;
          created_at:string;
          id:string;
          marketing_emails:boolean | null;
          system_notifications:boolean | null;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          marketing_emails?:boolean | null;
          system_notifications?:boolean | null;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          marketing_emails?:boolean | null;
          system_notifications?:boolean | null;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"notification_preferences_user_id_fkey";
            columns:["user_id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      notifications:{;
        Row:{;
          created_at:string | null;
          id:string;
          message:string;
          read:boolean | null;
          related_id:string | null;
          title:string;
          type:string;
          updated_at:string | null;
          user_id:string;
        }
        Insert:{;
          created_at?:string | null;
          id?:string;
          message:string;
          read?:boolean | null;
          related_id?:string | null;
          title:string;
          type:string;
          updated_at?:string | null;
          user_id:string;
        }
        Update:{;
          created_at?:string | null;
          id?:string;
          message?:string;
          read?:boolean | null;
          related_id?:string | null;
          title?:string;
          type?:string;
          updated_at?:string | null;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"notifications_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      partner_payouts:{;
        Row:{;
          amount:number;
          completed_at:string | null;
          created_at:string;
          id:string;
          method:string;
          partner_id:string;
          payout_details:Json | null;
          status:string;
          updated_at:string;
        }
        Insert:{;
          amount:number;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          method:string;
          partner_id:string;
          payout_details?:Json | null;
          status?:string;
          updated_at?:string;
        }
        Update:{;
          amount?:number;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          method?:string;
          partner_id?:string;
          payout_details?:Json | null;
          status?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"partner_payouts_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          }];
      }
      partner_profiles:{;
        Row:{;
          audience_size:string;
          bio:string;
          commission_rate:number | null;
          created_at:string;
          fraud_flags:number | null;
          id:string;
          name:string;
          niche:string;
          payout_method:string;
          social_media:Json | null;
          status:string;
          updated_at:string;
          user_id:string;
          website:string | null;
        }
        Insert:{;
          audience_size:string;
          bio:string;
          commission_rate?:number | null;
          created_at?:string;
          fraud_flags?:number | null;
          id?:string;
          name:string;
          niche:string;
          payout_method:string;
          social_media?:Json | null;
          status?:string;
          updated_at?:string;
          user_id:string;
          website?:string | null;
        }
        Update:{;
          audience_size?:string;
          bio?:string;
          commission_rate?:number | null;
          created_at?:string;
          fraud_flags?:number | null;
          id?:string;
          name?:string;
          niche?:string;
          payout_method?:string;
          social_media?:Json | null;
          status?:string;
          updated_at?:string;
          user_id?:string;
          website?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"partner_profiles_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      partner_referral_links:{;
        Row:{;
          campaign:string | null;
          clicks:number | null;
          conversions:number | null;
          created_at:string;
          id:string;
          name:string;
          partner_id:string;
          source:string | null;
          updated_at:string;
        }
        Insert:{;
          campaign?:string | null;
          clicks?:number | null;
          conversions?:number | null;
          created_at?:string;
          id?:string;
          name:string;
          partner_id:string;
          source?:string | null;
          updated_at?:string;
        }
        Update:{;
          campaign?:string | null;
          clicks?:number | null;
          conversions?:number | null;
          created_at?:string;
          id?:string;
          name?:string;
          partner_id?:string;
          source?:string | null;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"partner_referral_links_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          }];
      }
      portfolio_projects:{;
        Row:{;
          created_at:string;
          demo_url:string | null;
          description:string | null;
          github_url:string | null;
          id:string;
          image_url:string | null;
          pdf_url:string | null;
          technologies:string[] | null;
          title:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          demo_url?:string | null;
          description?:string | null;
          github_url?:string | null;
          id?:string;
          image_url?:string | null;
          pdf_url?:string | null;
          technologies?:string[] | null;
          title:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          demo_url?:string | null;
          description?:string | null;
          github_url?:string | null;
          id?:string;
          image_url?:string | null;
          pdf_url?:string | null;
          technologies?:string[] | null;
          title?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"portfolio_projects_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      profiles:{;
        Row:{;
          avatar_url:string | null;
          average_rating:number | null;
          bio:string | null;
          created_at:string;
          display_name:string | null;
          headline:string | null;
          id:string;
          ip_address:string | null;
          last_login_ip:string | null;
          profile_complete:boolean;
          rating_count:number | null;
          rating_sum:number | null;
          role:string | null;
          signup_timestamp:string | null;
          tenant_id:string | null;
          updated_at:string;
          user_type:string | null;
        }
        Insert:{;
          avatar_url?:string | null;
          average_rating?:number | null;
          bio?:string | null;
          created_at?:string;
          display_name?:string | null;
          headline?:string | null;
          id:string;
          ip_address?:string | null;
          last_login_ip?:string | null;
          profile_complete?:boolean;
          rating_count?:number | null;
          rating_sum?:number | null;
          role?:string | null;
          signup_timestamp?:string | null;
          tenant_id?:string | null;
          updated_at?:string;
          user_type?:string | null;
        }
        Update:{;
          avatar_url?:string | null;
          average_rating?:number | null;
          bio?:string | null;
          created_at?:string;
          display_name?:string | null;
          headline?:string | null;
          id?:string;
          ip_address?:string | null;
          last_login_ip?:string | null;
          profile_complete?:boolean;
          rating_count?:number | null;
          rating_sum?:number | null;
          role?:string | null;
          signup_timestamp?:string | null;
          tenant_id?:string | null;
          updated_at?:string;
          user_type?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"profiles_id_fkey";
            columns:["id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"profiles_tenant_id_fkey";
            columns:["tenant_id"];
            isOneToOne:false;
            referencedRelation:"whitelabel_tenants";
            referencedColumns:["id"];
          }];
      }
      project_milestones:{;
        Row:{;
          amount:number;
          created_at:string;
          created_by:string;
          deliverables:Json | null;
          description:string | null;
          due_date:string | null;
          id:string;
          project_id:string;
          status:string;
          title:string;
          updated_at:string;
        }
        Insert:{;
          amount:number;
          created_at?:string;
          created_by:string;
          deliverables?:Json | null;
          description?:string | null;
          due_date?:string | null;
          id?:string;
          project_id:string;
          status?:string;
          title:string;
          updated_at?:string;
        }
        Update:{;
          amount?:number;
          created_at?:string;
          created_by?:string;
          deliverables?:Json | null;
          description?:string | null;
          due_date?:string | null;
          id?:string;
          project_id?:string;
          status?:string;
          title?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"project_milestones_created_by_fkey";
            columns:["created_by"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"project_milestones_project_id_fkey";
            columns:["project_id"];
            isOneToOne:false;
            referencedRelation:"projects";
            referencedColumns:["id"];
          }];
      }
      project_notes:{;
        Row:{;
          content:string;
          created_at:string;
          id:string;
          project_id:string;
          user_id:string;
        }
        Insert:{;
          content:string;
          created_at?:string;
          id?:string;
          project_id:string;
          user_id:string;
        }
        Update:{;
          content?:string;
          created_at?:string;
          id?:string;
          project_id?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"project_notes_project_id_fkey";
            columns:["project_id"];
            isOneToOne:false;
            referencedRelation:"projects";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"project_notes_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      projects:{;
        Row:{;
          agreement_url:string | null;
          client_id:string;
          created_at:string;
          id:string;
          job_id:string;
          payment_terms:string;
          scope_summary:string;
          start_date:string;
          status:string;
          talent_id:string;
          updated_at:string;
        }
        Insert:{;
          agreement_url?:string | null;
          client_id:string;
          created_at?:string;
          id?:string;
          job_id:string;
          payment_terms:string;
          scope_summary:string;
          start_date:string;
          status?:string;
          talent_id:string;
          updated_at?:string;
        }
        Update:{;
          agreement_url?:string | null;
          client_id?:string;
          created_at?:string;
          id?:string;
          job_id?:string;
          payment_terms?:string;
          scope_summary?:string;
          start_date?:string;
          status?:string;
          talent_id?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"projects_client_id_fkey";
            columns:["client_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"projects_job_id_fkey";
            columns:["job_id"];
            isOneToOne:false;
            referencedRelation:"jobs";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"projects_talent_id_fkey";
            columns:["talent_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      quote_requests:{;
        Row:{;
          budget_display:string | null;
          budget_max:number | null;
          budget_min:number | null;
          created_at:string;
          id:string;
          is_archived:boolean;
          project_description:string | null;
          project_name:string;
          project_summary:string;
          replied_at:string | null;
          requester_email:string;
          requester_id:string | null;
          requester_name:string;
          start_date:string | null;
          status:Database["public"]["Enums"]["quote_request_status"];
          talent_id:string | null;
          timeline:string;
          updated_at:string;
          viewed_at:string | null;
        }
        Insert:{;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          id?:string;
          is_archived?:boolean;
          project_description?:string | null;
          project_name:string;
          project_summary:string;
          replied_at?:string | null;
          requester_email:string;
          requester_id?:string | null;
          requester_name:string;
          start_date?:string | null;
          status?:Database["public"]["Enums"]["quote_request_status"];
          talent_id?:string | null;
          timeline:string;
          updated_at?:string;
          viewed_at?:string | null;
        }
        Update:{;
          budget_display?:string | null;
          budget_max?:number | null;
          budget_min?:number | null;
          created_at?:string;
          id?:string;
          is_archived?:boolean;
          project_description?:string | null;
          project_name?:string;
          project_summary?:string;
          replied_at?:string | null;
          requester_email?:string;
          requester_id?:string | null;
          requester_name?:string;
          start_date?:string | null;
          status?:Database["public"]["Enums"]["quote_request_status"];
          talent_id?:string | null;
          timeline?:string;
          updated_at?:string;
          viewed_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"quote_requests_requester_id_fkey";
            columns:["requester_id"];
            isOneToOne:false;
            referencedRelation:"profiles";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"quote_requests_talent_id_fkey";
            columns:["talent_id"];
            isOneToOne:false;
            referencedRelation:"profiles";
            referencedColumns:["id"];
          }];
      }
      referral_codes:{;
        Row:{;
          code:string;
          created_at:string;
          id:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          code:string;
          created_at?:string;
          id?:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          code?:string;
          created_at?:string;
          id?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"referral_codes_user_id_fkey";
            columns:["user_id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      referral_rewards:{;
        Row:{;
          amount:number | null;
          created_at:string;
          expires_at:string | null;
          id:string;
          partner_id:string | null;
          referral_id:string;
          reward_type:string;
          user_id:string;
        }
        Insert:{;
          amount?:number | null;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          partner_id?:string | null;
          referral_id:string;
          reward_type:string;
          user_id:string;
        }
        Update:{;
          amount?:number | null;
          created_at?:string;
          expires_at?:string | null;
          id?:string;
          partner_id?:string | null;
          referral_id?:string;
          reward_type?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"referral_rewards_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"referral_rewards_referral_id_fkey";
            columns:["referral_id"];
            isOneToOne:false;
            referencedRelation:"referrals";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"referral_rewards_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      referrals:{;
        Row:{;
          completed_at:string | null;
          created_at:string;
          email:string | null;
          id:string;
          ip_address:string | null;
          partner_id:string | null;
          referral_code:string;
          referred_id:string | null;
          referred_user_type:string | null;
          referrer_id:string;
          referrer_user_type:string | null;
          reward_issued:boolean;
          reward_issued_at:string | null;
          status:Database["public"]["Enums"]["referral_status"];
        }
        Insert:{;
          completed_at?:string | null;
          created_at?:string;
          email?:string | null;
          id?:string;
          ip_address?:string | null;
          partner_id?:string | null;
          referral_code:string;
          referred_id?:string | null;
          referred_user_type?:string | null;
          referrer_id:string;
          referrer_user_type?:string | null;
          reward_issued?:boolean;
          reward_issued_at?:string | null;
          status?:Database["public"]["Enums"]["referral_status"];
        }
        Update:{;
          completed_at?:string | null;
          created_at?:string;
          email?:string | null;
          id?:string;
          ip_address?:string | null;
          partner_id?:string | null;
          referral_code?:string;
          referred_id?:string | null;
          referred_user_type?:string | null;
          referrer_id?:string;
          referrer_user_type?:string | null;
          reward_issued?:boolean;
          reward_issued_at?:string | null;
          status?:Database["public"]["Enums"]["referral_status"];
        }
        Relationships:[;
          {;
            foreignKeyName:"referrals_partner_id_fkey";
            columns:["partner_id"];
            isOneToOne:false;
            referencedRelation:"partner_profiles";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"referrals_referral_code_fkey";
            columns:["referral_code"];
            isOneToOne:false;
            referencedRelation:"referral_codes";
            referencedColumns:["code"];
          },;
          {;
            foreignKeyName:"referrals_referred_id_fkey";
            columns:["referred_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"referrals_referrer_id_fkey";
            columns:["referrer_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      reminder_logs:{;
        Row:{;
          clicked_at:string | null;
          email_body:string;
          email_subject:string;
          id:string;
          opened_at:string | null;
          reminder_type:string;
          sent_at:string | null;
          user_id:string;
        }
        Insert:{;
          clicked_at?:string | null;
          email_body:string;
          email_subject:string;
          id?:string;
          opened_at?:string | null;
          reminder_type:string;
          sent_at?:string | null;
          user_id:string;
        }
        Update:{;
          clicked_at?:string | null;
          email_body?:string;
          email_subject?:string;
          id?:string;
          opened_at?:string | null;
          reminder_type?:string;
          sent_at?:string | null;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"reminder_logs_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      resume_skills:{;
        Row:{;
          category:string | null;
          created_at:string;
          id:string;
          name:string;
          proficiency:number | null;
          resume_id:string;
          years_experience:number | null;
        }
        Insert:{;
          category?:string | null;
          created_at?:string;
          id?:string;
          name:string;
          proficiency?:number | null;
          resume_id:string;
          years_experience?:number | null;
        }
        Update:{;
          category?:string | null;
          created_at?:string;
          id?:string;
          name?:string;
          proficiency?:number | null;
          resume_id?:string;
          years_experience?:number | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"resume_skills_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
      review_reports:{;
        Row:{;
          created_at:string;
          id:string;
          reason:string;
          reporter_id:string;
          resolved_at:string | null;
          review_id:string;
          status:string;
        }
        Insert:{;
          created_at?:string;
          id?:string;
          reason:string;
          reporter_id:string;
          resolved_at?:string | null;
          review_id:string;
          status?:string;
        }
        Update:{;
          created_at?:string;
          id?:string;
          reason?:string;
          reporter_id?:string;
          resolved_at?:string | null;
          review_id?:string;
          status?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"review_reports_reporter_id_fkey";
            columns:["reporter_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"review_reports_review_id_fkey";
            columns:["review_id"];
            isOneToOne:false;
            referencedRelation:"reviews";
            referencedColumns:["id"];
          }];
      }
      reviews:{;
        Row:{;
          communication_rating:number | null;
          created_at:string;
          id:string;
          is_anonymous:boolean;
          is_visible:boolean;
          project_id:string;
          quality_rating:number | null;
          rating:number;
          report_count:number;
          review_text:string;
          reviewee_id:string;
          reviewer_id:string;
          status:string;
          timeliness_rating:number | null;
          updated_at:string;
          would_work_again:boolean | null;
        }
        Insert:{;
          communication_rating?:number | null;
          created_at?:string;
          id?:string;
          is_anonymous?:boolean;
          is_visible?:boolean;
          project_id:string;
          quality_rating?:number | null;
          rating:number;
          report_count?:number;
          review_text:string;
          reviewee_id:string;
          reviewer_id:string;
          status?:string;
          timeliness_rating?:number | null;
          updated_at?:string;
          would_work_again?:boolean | null;
        }
        Update:{;
          communication_rating?:number | null;
          created_at?:string;
          id?:string;
          is_anonymous?:boolean;
          is_visible?:boolean;
          project_id?:string;
          quality_rating?:number | null;
          rating?:number;
          report_count?:number;
          review_text?:string;
          reviewee_id?:string;
          reviewer_id?:string;
          status?:string;
          timeliness_rating?:number | null;
          updated_at?:string;
          would_work_again?:boolean | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"reviews_project_id_fkey";
            columns:["project_id"];
            isOneToOne:false;
            referencedRelation:"projects";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"reviews_reviewee_id_fkey";
            columns:["reviewee_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          },;
          {;
            foreignKeyName:"reviews_reviewer_id_fkey";
            columns:["reviewer_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      scheduled_jobs:{;
        Row:{;
          completed_at:string | null;
          created_at:string;
          id:string;
          job_type:string;
          payload:Json | null;
          scheduled_for:string;
          status:string;
          updated_at:string;
        }
        Insert:{;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          job_type:string;
          payload?:Json | null;
          scheduled_for:string;
          status:string;
          updated_at?:string;
        }
        Update:{;
          completed_at?:string | null;
          created_at?:string;
          id?:string;
          job_type?:string;
          payload?:Json | null;
          scheduled_for?:string;
          status?:string;
          updated_at?:string;
        }
        Relationships:[];
      }
      subscriptions:{;
        Row:{;
          created_at:string;
          current_period_end:string | null;
          current_period_start:string | null;
          id:string;
          plan_type:string;
          status:string;
          stripe_customer_id:string | null;
          stripe_subscription_id:string | null;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          current_period_end?:string | null;
          current_period_start?:string | null;
          id?:string;
          plan_type:string;
          status:string;
          stripe_customer_id?:string | null;
          stripe_subscription_id?:string | null;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          current_period_end?:string | null;
          current_period_start?:string | null;
          id?:string;
          plan_type?:string;
          status?:string;
          stripe_customer_id?:string | null;
          stripe_subscription_id?:string | null;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"subscriptions_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      talent_resumes:{;
        Row:{;
          created_at:string;
          headline:string | null;
          id:string;
          is_active:boolean;
          summary:string | null;
          title:string;
          updated_at:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          headline?:string | null;
          id?:string;
          is_active?:boolean;
          summary?:string | null;
          title?:string;
          updated_at?:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          headline?:string | null;
          id?:string;
          is_active?:boolean;
          summary?:string | null;
          title?:string;
          updated_at?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"talent_resumes_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      tenant_administrators:{;
        Row:{;
          created_at:string | null;
          id:string;
          tenant_id:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string | null;
          id?:string;
          tenant_id:string;
          user_id:string;
        }
        Update:{;
          created_at?:string | null;
          id?:string;
          tenant_id?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"tenant_administrators_tenant_id_fkey";
            columns:["tenant_id"];
            isOneToOne:false;
            referencedRelation:"whitelabel_tenants";
            referencedColumns:["id"];
          },;
          {;
            foreignKeyName:"tenant_administrators_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      user_onboarding:{;
        Row:{;
          application_sent:boolean | null;
          application_sent_at:string | null;
          availability_set:boolean | null;
          availability_set_at:string | null;
          created_at:string;
          id:string;
          job_posted:boolean | null;
          job_posted_at:string | null;
          last_reminder_sent:string | null;
          match_received:boolean | null;
          match_received_at:string | null;
          match_viewed:boolean | null;
          match_viewed_at:string | null;
          profile_completed:boolean | null;
          profile_completed_at:string | null;
          quote_received:boolean | null;
          quote_received_at:string | null;
          reminder_count:number | null;
          role:string;
          skills_added:boolean | null;
          skills_added_at:string | null;
          talent_invited:boolean | null;
          talent_invited_at:string | null;
          updated_at:string;
          user_id:string | null;
        }
        Insert:{;
          application_sent?:boolean | null;
          application_sent_at?:string | null;
          availability_set?:boolean | null;
          availability_set_at?:string | null;
          created_at?:string;
          id?:string;
          job_posted?:boolean | null;
          job_posted_at?:string | null;
          last_reminder_sent?:string | null;
          match_received?:boolean | null;
          match_received_at?:string | null;
          match_viewed?:boolean | null;
          match_viewed_at?:string | null;
          profile_completed?:boolean | null;
          profile_completed_at?:string | null;
          quote_received?:boolean | null;
          quote_received_at?:string | null;
          reminder_count?:number | null;
          role:string;
          skills_added?:boolean | null;
          skills_added_at?:string | null;
          talent_invited?:boolean | null;
          talent_invited_at?:string | null;
          updated_at?:string;
          user_id?:string | null;
        }
        Update:{;
          application_sent?:boolean | null;
          application_sent_at?:string | null;
          availability_set?:boolean | null;
          availability_set_at?:string | null;
          created_at?:string;
          id?:string;
          job_posted?:boolean | null;
          job_posted_at?:string | null;
          last_reminder_sent?:string | null;
          match_received?:boolean | null;
          match_received_at?:string | null;
          match_viewed?:boolean | null;
          match_viewed_at?:string | null;
          profile_completed?:boolean | null;
          profile_completed_at?:string | null;
          quote_received?:boolean | null;
          quote_received_at?:string | null;
          reminder_count?:number | null;
          role?:string;
          skills_added?:boolean | null;
          skills_added_at?:string | null;
          talent_invited?:boolean | null;
          talent_invited_at?:string | null;
          updated_at?:string;
          user_id?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"user_onboarding_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      user_privacy_settings:{;
        Row:{;
          activity_monitoring_enabled:boolean | null;
          ai_analysis_enabled:boolean | null;
          id:string;
          message_scanning_enabled:boolean | null;
          updated_at:string | null;
        }
        Insert:{;
          activity_monitoring_enabled?:boolean | null;
          ai_analysis_enabled?:boolean | null;
          id:string;
          message_scanning_enabled?:boolean | null;
          updated_at?:string | null;
        }
        Update:{;
          activity_monitoring_enabled?:boolean | null;
          ai_analysis_enabled?:boolean | null;
          id?:string;
          message_scanning_enabled?:boolean | null;
          updated_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"user_privacy_settings_id_fkey";
            columns:["id"];
            isOneToOne:true;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      webhook_configs:{;
        Row:{;
          created_at:string;
          event_types:string[];
          id:string;
          is_active:boolean;
          last_triggered_at:string | null;
          name:string;
          secret:string | null;
          updated_at:string;
          url:string;
          user_id:string;
        }
        Insert:{;
          created_at?:string;
          event_types:string[];
          id?:string;
          is_active?:boolean;
          last_triggered_at?:string | null;
          name:string;
          secret?:string | null;
          updated_at?:string;
          url:string;
          user_id:string;
        }
        Update:{;
          created_at?:string;
          event_types?:string[];
          id?:string;
          is_active?:boolean;
          last_triggered_at?:string | null;
          name?:string;
          secret?:string | null;
          updated_at?:string;
          url?:string;
          user_id?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"webhook_configs_user_id_fkey";
            columns:["user_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      whitelabel_tenants:{;
        Row:{;
          account_manager_id:string | null;
          brand_name:string;
          created_at:string | null;
          custom_domain:string | null;
          dns_verified:boolean;
          email_template_override:Json | null;
          id:string;
          is_active:boolean;
          landing_page_copy:Json | null;
          logo_url:string | null;
          primary_color:string;
          subdomain:string;
          theme_preset:string;
          updated_at:string | null;
        }
        Insert:{;
          account_manager_id?:string | null;
          brand_name:string;
          created_at?:string | null;
          custom_domain?:string | null;
          dns_verified?:boolean;
          email_template_override?:Json | null;
          id?:string;
          is_active?:boolean;
          landing_page_copy?:Json | null;
          logo_url?:string | null;
          primary_color?:string;
          subdomain:string;
          theme_preset?:string;
          updated_at?:string | null;
        }
        Update:{;
          account_manager_id?:string | null;
          brand_name?:string;
          created_at?:string | null;
          custom_domain?:string | null;
          dns_verified?:boolean;
          email_template_override?:Json | null;
          id?:string;
          is_active?:boolean;
          landing_page_copy?:Json | null;
          logo_url?:string | null;
          primary_color?:string;
          subdomain?:string;
          theme_preset?:string;
          updated_at?:string | null;
        }
        Relationships:[;
          {;
            foreignKeyName:"whitelabel_tenants_account_manager_id_fkey";
            columns:["account_manager_id"];
            isOneToOne:false;
            referencedRelation:"user_metrics";
            referencedColumns:["user_id"];
          }];
      }
      work_history:{;
        Row:{;
          company_logo_url:string | null;
          company_name:string;
          created_at:string;
          description:string | null;
          end_date:string | null;
          id:string;
          is_current:boolean;
          location:string | null;
          resume_id:string;
          role_title:string;
          start_date:string;
          updated_at:string;
        }
        Insert:{;
          company_logo_url?:string | null;
          company_name:string;
          created_at?:string;
          description?:string | null;
          end_date?:string | null;
          id?:string;
          is_current?:boolean;
          location?:string | null;
          resume_id:string;
          role_title:string;
          start_date:string;
          updated_at?:string;
        }
        Update:{;
          company_logo_url?:string | null;
          company_name?:string;
          created_at?:string;
          description?:string | null;
          end_date?:string | null;
          id?:string;
          is_current?:boolean;
          location?:string | null;
          resume_id?:string;
          role_title?:string;
          start_date?:string;
          updated_at?:string;
        }
        Relationships:[;
          {;
            foreignKeyName:"work_history_resume_id_fkey";
            columns:["resume_id"];
            isOneToOne:false;
            referencedRelation:"talent_resumes";
            referencedColumns:["id"];
          }];
      }
    }
    Views:{;
      conversion_rates:{;
        Row:{;
          conversion_count:number | null;
          conversion_rate:number | null;
          conversion_type:string | null;
          date:string | null;
          view_count:number | null;
        }
        Relationships:[];
      }
      daily_page_views:{;
        Row:{;
          date:string | null;
          path:string | null;
          view_count:number | null;
        }
        Relationships:[];
      }
      user_metrics:{;
        Row:{;
          job_applications:number | null;
          profile_views:number | null;
          quote_invites:number | null;
          success_rate:number | null;
          user_id:string | null;
        }
        Insert:{;
          job_applications?:never;
          profile_views?:never;
          quote_invites?:never;
          success_rate?:never;
          user_id?:string | null;
        }
        Update:{;
          job_applications?:never;
          profile_views?:never;
          quote_invites?:never;
          success_rate?:never;
          user_id?:string | null;
        }
        Relationships:[];
      }
    }
    Functions:{;
      check_users_needing_reminders:{;
        Args:Record<PropertyKey never>;
        Returns:{;
          user_id:string;
          email:string;
          display_name:string;
          user_type:string;
          last_login:string;
          reminder_type:string;
          days_since_login:number;
          onboarding_status:Json;
        }[];
      }
      complete_referral:{;
        Args:{ _referred_id:string, _user_type:string }
        Returns:undefined;
      }
      create_notification:{;
        Args:{;
          _user_id:string;
          _title:string;
          _message:string;
          _type:string;
          _related_id?:string;
        }
        Returns:string;
      }
      create_scheduled_reminders:{;
        Args:Record<PropertyKey never>;
        Returns:undefined;
      }
      flag_suspicious_content:{;
        Args:{;
          p_user_id:string;
          p_user_email:string;
          p_content_type:string;
          p_content_id:string;
          p_content_excerpt:string;
          p_severity:string;
          p_reason:string;
          p_ip_address:string;
        }
        Returns:string;
      }
      generate_api_key:{;
        Args:{ prefix:string }
        Returns:string;
      }
      generate_fraud_report:{;
        Args:{ year:number, month:number }
        Returns:string;
      }
      generate_referral_code:{;
        Args:{ user_id:string }
        Returns:string;
      }
      get_api_key_user_id:{;
        Args:{ key_prefix:string, provided_key:string }
        Returns:string;
      }
      get_current_tenant_id:{;
        Args:Record<PropertyKey never>;
        Returns:string;
      }
      get_event_distribution:{;
        Args:{ days_back?:number }
        Returns:{;
          date:string;
          event_type:string;
          count:number;
        }[];
      }
      hash_api_key:{;
        Args:{ api_key:string }
        Returns:string;
      }
      schedule_email_reminders:{;
        Args:Record<PropertyKey never>;
        Returns:number;
      }
      trigger_resume_scoring:{;
        Args:{ application_id:string }
        Returns:undefined;
      }
      update_onboarding_milestone:{;
        Args:{ _user_id:string, _milestone:string, _status:boolean }
        Returns:undefined;
      }
      verify_api_key:{;
        Args:{ provided_key:string, stored_hash:string }
        Returns:boolean;
      }
    }
    Enums:{;
      api_key_scope:;
        | "jobs:read";
        | "jobs:write";
        | "talent:read";
        | "quotes:write";
        | "webhooks:manage";
      fraud_severity:"safe" | "suspicious" | "dangerous";
      quote_request_status:;
        | "new";
        | "in_review";
        | "accepted";
        | "responded";
        | "closed";
        | "archived";
      referral_status:"pending" | "completed" | "expired";
    }
    CompositeTypes:{;
      [_ in never]:never;
    }
  }
}
;
type DefaultSchema = Database[Extract<keyof Database, "public">];
;
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"]);
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {;
      Row:infer R;
    }
    ? R;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;
        DefaultSchema["Views"]);
    ? (DefaultSchema["Tables"] &;
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {;
        Row:infer R;
      }
      ? R;
      :never;
    :never;
;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Insert:infer I;
    }
    ? I;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Insert:infer I;
      }
      ? I;
      :never;
    :never;
;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Update:infer U;
    }
    ? U;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Update:infer U;
      }
      ? U;
      :never;
    :never;
;
export type Enums<;
  DefaultSchemaEnumNameOrOptions extends;
    | keyof DefaultSchema["Enums"];
    | { schema:keyof Database },;
  EnumName extends DefaultSchemaEnumNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];
    :never = never> = DefaultSchemaEnumNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName];
  :DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"];
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions];
    :never;
;
export type CompositeTypes<;
  PublicCompositeTypeNameOrOptions extends;
    | keyof DefaultSchema["CompositeTypes"];
    | { schema:keyof Database },;
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];
    :never = never> = PublicCompositeTypeNameOrOptions extends { schema:keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName];
  :PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"];
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions];
    :never;
;
export const Constants = {;
  public:{;
    Enums:{;
      api_key_scope:[;
        "jobs:read",;
        "jobs:write",;
        "talent:read",;
        "quotes:write",;
        "webhooks:manage"],;
      fraud_severity:["safe", "suspicious", "dangerous"],;
      quote_request_status:[;
        "new",;
        "in_review",;
        "accepted",;
        "responded",;
        "closed",;
        "archived"],;
      referral_status:["pending", "completed", "expired"]}}} as const;export type Json = | string | number | boolean | null | {
  [key: string]: Json | undefined 
}| Json[] export type Database = {
  public: {
  Tables: {
  ai chats: {
  Row: {
  created at: string id: string message: string response: string user id: string 
}Insert: {
  created at?: string id?: string message: string response: string user id: string 
}Update: {
  created at?: string id?: string message?: string response?: string user id?: string 
}Relationships: [ 
}analytics events: {
  Row: {
  created at: string | null event type: string id: string metadata: Json | null path: string | null session id: string | null user id: string | null 
}Insert: {
  created at?: string | null event type: string id?: string metadata?: Json | null path?: string | null session id?: string | null user id?: string | null 
}Update: {
  created at?: string | null event type?: string id?: string metadata?: Json | null path?: string | null session id?: string | null user id?: string | null 
}Relationships: [ 
}api keys: {
  Row: {
  created at: string expires at: string | null id: string is active: boolean key hash: string key prefix: string last used at: string | null name: string expires at?: string | null id?: string is active?: boolean key hash: string key prefix: string last used at?: string | null name: string expires at?: string | null id?: string is active?: boolean key hash?: string key prefix?: string last used at?: string | null name?: string 
}api logs: {
  Row: {
  api key id: string | null created at: string endpoint: string id: string ip address: string | null method: string response time ms: number | null status code: number user agent: string | null user id: string | null 
}Insert: {
  api key id?: string | null created at?: string endpoint: string id?: string ip address?: string | null method: string response time ms?: number | null status code: number user agent?: string | null user id?: string | null 
}Update: {
  api key id?: string | null created at?: string endpoint?: string id?: string ip address?: string | null method?: string response time ms?: number | null status code?: number user agent?: string | null user id?: string | null 
}Relationships: [ 
}certifications: {
  Row: {
  created at: string credential id: string | null credential url: string | null expiration date: string | null id: string issue date: string | null issuing organization: string name: string resume id: string 
}Insert: {
  created at?: string credential id?: string | null credential url?: string | null expiration date?: string | null id?: string issue date?: string | null issuing organization: string name: string resume id: string 
}Update: {
  created at?: string credential id?: string | null credential url?: string | null expiration date?: string | null id?: string issue date?: string | null issuing organization?: string name?: string resume id?: string 
}Relationships: [ 
}content: {
  Row: {
  content type: string content url: string | null created at: string creator id: string description: string | null id: string published: boolean | null thumbnail url: string | null title: string updated at: string views: number | null 
}Insert: {
  content type: string content url?: string | null created at?: string creator id: string description?: string | null id?: string published?: boolean | null thumbnail url?: string | null title: string updated at?: string views?: number | null 
}Update: {
  content type?: string content url?: string | null created at?: string creator id?: string description?: string | null id?: string published?: boolean | null thumbnail url?: string | null title?: string updated at?: string views?: number | null 
}Relationships: [ 
}contract templates: {
  Row: {
  created at: string id: string is default: boolean | null template data: Json title: string updated at: string user id: string 
}Insert: {
  created at?: string id?: string is default?: boolean | null template data: Json title: string updated at?: string user id: string 
}Update: {
  created at?: string id?: string is default?: boolean | null template data?: Json title?: string updated at?: string user id?: string 
}Relationships: [ 
}education: {
  Row: {
  created at: string degree: string description: string | null end date: string | null field of study: string | null id: string institution: string institution logo url: string | null is current: boolean location: string | null resume id: string start date: string updated at: string 
}Insert: {
  created at?: string degree: string description?: string | null end date?: string | null field of study?: string | null id?: string institution: string institution logo url?: string | null is current?: boolean location?: string | null resume id: string start date: string updated at?: string 
}Update: {
  created at?: string degree?: string description?: string | null end date?: string | null field of study?: string | null id?: string institution?: string institution logo url?: string | null is current?: boolean location?: string | null resume id?: string start date?: string updated at?: string 
}Relationships: [ 
}fraud detection reports: {
  Row: {
  action taken count: number dangerous count: number false positive count: number generated at: string id: string report data: Json | null report month: string suspicious count: number total flags: number 
}Insert: {
  action taken count?: number dangerous count?: number false positive count?: number generated at?: string id?: string report data?: Json | null report month: string suspicious count?: number total flags?: number 
}Update: {
  action taken count?: number dangerous count?: number false positive count?: number generated at?: string id?: string report data?: Json | null report month?: string suspicious count?: number total flags?: number 
}Relationships: [] 
}fraud flags: {
  Row: {
  action taken: string | null content excerpt: string content id: string content type: string gpt classification: string | null gpt explanation: string | null id: string ip address: string | null is false positive: boolean | null reason: string reviewed at: string | null reviewed by: string | null severity: Database["public" ]["Enums" ]["fraud severity" ] status: string timestamp: string updated at: string | null user email: string | null user id: string | null 
}Insert: {
  action taken?: string | null content excerpt: string content id: string content type: string gpt classification?: string | null gpt explanation?: string | null id?: string ip address?: string | null is false positive?: boolean | null reason: string reviewed at?: string | null reviewed by?: string | null severity?: Database["public" ]["Enums" ]["fraud severity" ] status?: string timestamp?: string updated at?: string | null user email?: string | null user id?: string | null 
}Update: {
  action taken?: string | null content excerpt?: string content id?: string content type?: string gpt classification?: string | null gpt explanation?: string | null id?: string ip address?: string | null is false positive?: boolean | null reason?: string reviewed at?: string | null reviewed by?: string | null severity?: Database["public" ]["Enums" ]["fraud severity" ] status?: string timestamp?: string updated at?: string | null user email?: string | null user id?: string | null 
}Relationships: [ 
}hire requests: {
  Row: {
  attachments: Json | null budget display: string | null budget max: number | null budget min: number | null created at: string expiry date: string | null id: string project overview: string project summary: string | null project type: string | null requester email: string requester id: string | null requester name: string status: string talent id: string timeline: string updated at: string 
}Insert: {
  attachments?: Json | null budget display?: string | null budget max?: number | null budget min?: number | null created at?: string expiry date?: string | null id?: string project overview: string project summary?: string | null project type?: string | null requester email: string requester id?: string | null requester name: string status?: string talent id: string timeline: string updated at?: string 
}Update: {
  attachments?: Json | null budget display?: string | null budget max?: number | null budget min?: number | null created at?: string expiry date?: string | null id?: string project overview?: string project summary?: string | null project type?: string | null requester email?: string requester id?: string | null requester name?: string status?: string talent id?: string timeline?: string updated at?: string 
}Relationships: [] 
}interviews: {
  Row: {
  client id: string created at: string duration minutes: number end time: string | null id: string interview type: string meeting link: string | null meeting platform: string | null notes: string | null reminder sent: string | null scheduled date: string status: string talent id: string title: string | null updated at: string 
}Insert: {
  client id: string created at?: string duration minutes?: number end time?: string | null id?: string interview type?: string meeting link?: string | null meeting platform?: string | null notes?: string | null reminder sent?: string | null scheduled date: string status?: string talent id: string title?: string | null updated at?: string 
}Update: {
  client id?: string created at?: string duration minutes?: number end time?: string | null id?: string interview type?: string meeting link?: string | null meeting platform?: string | null notes?: string | null reminder sent?: string | null scheduled date?: string status?: string talent id?: string title?: string | null updated at?: string 
}Relationships: [] 
}job applications: {
  Row: {
  cover letter: string | null created at: string | null id: string is shortlisted: boolean | null job id: string match breakdown: Json | null match score: number | null match suggestion: string | null match summary: string | null resume id: string | null scored at: string | null status: string talent id: string viewed at: string | null 
}Insert: {
  cover letter?: string | null created at?: string | null id?: string is shortlisted?: boolean | null job id: string match breakdown?: Json | null match score?: number | null match suggestion?: string | null match summary?: string | null resume id?: string | null scored at?: string | null status?: string talent id: string viewed at?: string | null 
}Update: {
  cover letter?: string | null created at?: string | null id?: string is shortlisted?: boolean | null job id?: string match breakdown?: Json | null match score?: number | null match suggestion?: string | null match summary?: string | null resume id?: string | null scored at?: string | null status?: string talent id?: string viewed at?: string | null 
}Relationships: [ 
}jobs: {
  Row: {
  budget: Json category: string client id: string created at: string deadline: string | null description: string id: string skills: string[] status: string title: string updated at: string 
}Insert: {
  budget?: Json category: string client id: string created at?: string deadline?: string | null description: string id?: string skills?: string[] status?: string title: string updated at?: string 
}Update: {
  budget?: Json category?: string client id?: string created at?: string deadline?: string | null description?: string id?: string skills?: string[] status?: string title?: string updated at?: string 
}Relationships: [ 
}milestone activities: {
  Row: {
  action: string comment: string | null created at: string id: string milestone id: string new status: string previous status: string | null user id: string 
}Insert: {
  action: string comment?: string | null created at?: string id?: string milestone id: string new status: string previous status?: string | null user id: string 
}Update: {
  action?: string comment?: string | null created at?: string id?: string milestone id?: string new status?: string previous status?: string | null user id?: string 
}Relationships: [ 
}notification preferences: {
  Row: {
  created at: string id: string marketing emails: boolean | null system notifications: boolean | null updated at: string user id: string 
}Insert: {
  created at?: string id?: string marketing emails?: boolean | null system notifications?: boolean | null updated at?: string user id: string 
}Update: {
  created at?: string id?: string marketing emails?: boolean | null system notifications?: boolean | null updated at?: string user id?: string 
}Relationships: [ 
}notifications: {
  Row: {
  created at: string | null id: string message: string read: boolean | null related id: string | null title: string type: string updated at: string | null user id: string 
}Insert: {
  created at?: string | null id?: string message: string read?: boolean | null related id?: string | null title: string type: string updated at?: string | null user id: string 
}Update: {
  created at?: string | null id?: string message?: string read?: boolean | null related id?: string | null title?: string type?: string updated at?: string | null user id?: string 
}Relationships: [ 
}partner payouts: {
  Row: {
  amount: number completed at: string | null created at: string id: string method: string partner id: string payout details: Json | null status: string updated at: string 
}Insert: {
  amount: number completed at?: string | null created at?: string id?: string method: string partner id: string payout details?: Json | null status?: string updated at?: string 
}Update: {
  amount?: number completed at?: string | null created at?: string id?: string method?: string partner id?: string payout details?: Json | null status?: string updated at?: string 
}Relationships: [ 
}partner profiles: {
  Row: {
  audience size: string bio: string commission rate: number | null created at: string fraud flags: number | null id: string name: string niche: string payout method: string social media: Json | null status: string updated at: string user id: string website: string | null 
}Insert: {
  audience size: string bio: string commission rate?: number | null created at?: string fraud flags?: number | null id?: string name: string niche: string payout method: string social media?: Json | null status?: string updated at?: string user id: string website?: string | null 
}Update: {
  audience size?: string bio?: string commission rate?: number | null created at?: string fraud flags?: number | null id?: string name?: string niche?: string payout method?: string social media?: Json | null status?: string updated at?: string user id?: string website?: string | null 
}Relationships: [ 
}partner referral links: {
  Row: {
  campaign: string | null clicks: number | null conversions: number | null created at: string id: string name: string partner id: string source: string | null updated at: string 
}Insert: {
  campaign?: string | null clicks?: number | null conversions?: number | null created at?: string id?: string name: string partner id: string source?: string | null updated at?: string 
}Update: {
  campaign?: string | null clicks?: number | null conversions?: number | null created at?: string id?: string name?: string partner id?: string source?: string | null updated at?: string 
}Relationships: [ 
}portfolio projects: {
  Row: {
  created at: string demo url: string | null description: string | null github url: string | null id: string image url: string | null pdf url: string | null technologies: string[] | null title: string updated at: string user id: string 
}Insert: {
  created at?: string demo url?: string | null description?: string | null github url?: string | null id?: string image url?: string | null pdf url?: string | null technologies?: string[] | null title: string updated at?: string user id: string 
}Update: {
  created at?: string demo url?: string | null description?: string | null github url?: string | null id?: string image url?: string | null pdf url?: string | null technologies?: string[] | null title?: string updated at?: string user id?: string 
}Relationships: [ 
}profiles: {
  Row: {
  avatar url: string | null average rating: number | null bio: string | null created at: string display name: string | null headline: string | null id: string ip address: string | null last login ip: string | null profile complete: boolean rating count: number | null rating sum: number | null role: string | null signup timestamp: string | null tenant id: string | null updated at: string user type: string | null 
}Insert: {
  avatar url?: string | null average rating?: number | null bio?: string | null created at?: string display name?: string | null headline?: string | null id: string ip address?: string | null last login ip?: string | null profile complete?: boolean rating count?: number | null rating sum?: number | null role?: string | null signup timestamp?: string | null tenant id?: string | null updated at?: string user type?: string | null 
}Update: {
  avatar url?: string | null average rating?: number | null bio?: string | null created at?: string display name?: string | null headline?: string | null id?: string ip address?: string | null last login ip?: string | null profile complete?: boolean rating count?: number | null rating sum?: number | null role?: string | null signup timestamp?: string | null tenant id?: string | null updated at?: string user type?: string | null 
}Relationships: [ 
}project milestones: {
  Row: {
  amount: number created at: string created by: string deliverables: Json | null description: string | null due date: string | null id: string project id: string status: string title: string updated at: string 
}Insert: {
  amount: number created at?: string created by: string deliverables?: Json | null description?: string | null due date?: string | null id?: string project id: string status?: string title: string updated at?: string 
}Update: {
  amount?: number created at?: string created by?: string deliverables?: Json | null description?: string | null due date?: string | null id?: string project id?: string status?: string title?: string updated at?: string 
}Relationships: [ 
}project notes: {
  Row: {
  content: string created at: string id: string project id: string user id: string 
}Insert: {
  content: string created at?: string id?: string project id: string user id: string 
}Update: {
  content?: string created at?: string id?: string project id?: string user id?: string 
}Relationships: [ 
}projects: {
  Row: {
  agreement url: string | null client id: string created at: string id: string job id: string payment terms: string scope summary: string start date: string status: string talent id: string updated at: string 
}Insert: {
  agreement url?: string | null client id: string created at?: string id?: string job id: string payment terms: string scope summary: string start date: string status?: string talent id: string updated at?: string 
}Update: {
  agreement url?: string | null client id?: string created at?: string id?: string job id?: string payment terms?: string scope summary?: string start date?: string status?: string talent id?: string updated at?: string 
}Relationships: [ 
}quote requests: {
  Row: {
  budget display: string | null budget max: number | null budget min: number | null created at: string id: string is archived: boolean project description: string | null project name: string project summary: string replied at: string | null requester email: string requester id: string | null requester name: string start date: string | null status: Database["public" ]["Enums" ]["quote request status" ] talent id: string | null timeline: string updated at: string viewed at: string | null 
}Insert: {
  budget display?: string | null budget max?: number | null budget min?: number | null created at?: string id?: string is archived?: boolean project description?: string | null project name: string project summary: string replied at?: string | null requester email: string requester id?: string | null requester name: string start date?: string | null status?: Database["public" ]["Enums" ]["quote request status" ] talent id?: string | null timeline: string updated at?: string viewed at?: string | null 
}Update: {
  budget display?: string | null budget max?: number | null budget min?: number | null created at?: string id?: string is archived?: boolean project description?: string | null project name?: string project summary?: string replied at?: string | null requester email?: string requester id?: string | null requester name?: string start date?: string | null status?: Database["public" ]["Enums" ]["quote request status" ] talent id?: string | null timeline?: string updated at?: string viewed at?: string | null 
}Relationships: [ 
}referral codes: {
  Row: {
  code: string created at: string id: string updated at: string user id: string 
}Insert: {
  code: string created at?: string id?: string updated at?: string user id: string 
}Update: {
  code?: string created at?: string id?: string updated at?: string user id?: string 
}Relationships: [ 
}referral rewards: {
  Row: {
  amount: number | null created at: string expires at: string | null id: string partner id: string | null referral id: string reward type: string user id: string 
}Insert: {
  amount?: number | null created at?: string expires at?: string | null id?: string partner id?: string | null referral id: string reward type: string user id: string 
}Update: {
  amount?: number | null created at?: string expires at?: string | null id?: string partner id?: string | null referral id?: string reward type?: string user id?: string 
}Relationships: [ 
}referrals: {
  Row: {
  completed at: string | null created at: string email: string | null id: string ip address: string | null partner id: string | null referral code: string referred id: string | null referred user type: string | null referrer id: string referrer user type: string | null reward issued: boolean reward issued at: string | null created at?: string email?: string | null id?: string ip address?: string | null partner id?: string | null referral code: string referred id?: string | null referred user type?: string | null referrer id: string referrer user type?: string | null reward issued?: boolean reward issued at?: string | null created at?: string email?: string | null id?: string ip address?: string | null partner id?: string | null referral code?: string referred id?: string | null referred user type?: string | null referrer id?: string referrer user type?: string | null reward issued?: boolean reward issued at?: string | null 
}reminder logs: {
  Row: {
  clicked at: string | null email body: string email subject: string id: string opened at: string | null reminder type: string sent at: string | null user id: string 
}Insert: {
  clicked at?: string | null email body: string email subject: string id?: string opened at?: string | null reminder type: string sent at?: string | null user id: string 
}Update: {
  clicked at?: string | null email body?: string email subject?: string id?: string opened at?: string | null reminder type?: string sent at?: string | null user id?: string 
}Relationships: [ 
}resume skills: {
  Row: {
  category: string | null created at: string id: string name: string proficiency: number | null resume id: string years experience: number | null 
}Insert: {
  category?: string | null created at?: string id?: string name: string proficiency?: number | null resume id: string years experience?: number | null 
}Update: {
  category?: string | null created at?: string id?: string name?: string proficiency?: number | null resume id?: string years experience?: number | null 
}Relationships: [ 
}review reports: {
  Row: {
  created at: string id: string reason: string reporter id: string resolved at: string | null review id: string status: string 
}Insert: {
  created at?: string id?: string reason: string reporter id: string resolved at?: string | null review id: string status?: string 
}Update: {
  created at?: string id?: string reason?: string reporter id?: string resolved at?: string | null review id?: string status?: string 
}Relationships: [ 
}reviews: {
  Row: {
  communication rating: number | null created at: string id: string is anonymous: boolean is visible: boolean project id: string quality rating: number | null rating: number report count: number review text: string reviewee id: string reviewer id: string status: string timeliness rating: number | null updated at: string would work again: boolean | null 
}Insert: {
  communication rating?: number | null created at?: string id?: string is anonymous?: boolean is visible?: boolean project id: string quality rating?: number | null rating: number report count?: number review text: string reviewee id: string reviewer id: string status?: string timeliness rating?: number | null updated at?: string would work again?: boolean | null 
}Update: {
  communication rating?: number | null created at?: string id?: string is anonymous?: boolean is visible?: boolean project id?: string quality rating?: number | null rating?: number report count?: number review text?: string reviewee id?: string reviewer id?: string status?: string timeliness rating?: number | null updated at?: string would work again?: boolean | null 
}Relationships: [ 
}scheduled jobs: {
  Row: {
  completed at: string | null created at: string id: string job type: string payload: Json | null scheduled for: string status: string updated at: string 
}Insert: {
  completed at?: string | null created at?: string id?: string job type: string payload?: Json | null scheduled for: string status: string updated at?: string 
}Update: {
  completed at?: string | null created at?: string id?: string job type?: string payload?: Json | null scheduled for?: string status?: string updated at?: string 
}Relationships: [] 
}subscriptions: {
  Row: {
  created at: string current period end: string | null current period start: string | null id: string plan type: string status: string stripe customer id: string | null stripe subscription id: string | null updated at: string user id: string 
}Insert: {
  created at?: string current period end?: string | null current period start?: string | null id?: string plan type: string status: string stripe customer id?: string | null stripe subscription id?: string | null updated at?: string user id: string 
}Update: {
  created at?: string current period end?: string | null current period start?: string | null id?: string plan type?: string status?: string stripe customer id?: string | null stripe subscription id?: string | null updated at?: string user id?: string 
}Relationships: [ 
}talent resumes: {
  Row: {
  created at: string headline: string | null id: string is active: boolean summary: string | null title: string updated at: string user id: string 
}Insert: {
  created at?: string headline?: string | null id?: string is active?: boolean summary?: string | null title?: string updated at?: string user id: string 
}Update: {
  created at?: string headline?: string | null id?: string is active?: boolean summary?: string | null title?: string updated at?: string user id?: string 
}Relationships: [ 
}tenant administrators: {
  Row: {
  created at: string | null id: string tenant id: string user id: string 
}Insert: {
  created at?: string | null id?: string tenant id: string user id: string 
}Update: {
  created at?: string | null id?: string tenant id?: string user id?: string 
}Relationships: [ 
}user onboarding: {
  Row: {
  application sent: boolean | null application sent at: string | null availability set: boolean | null availability set at: string | null created at: string id: string job posted: boolean | null job posted at: string | null last reminder sent: string | null match received: boolean | null match received at: string | null match viewed: boolean | null match viewed at: string | null profile completed: boolean | null profile completed at: string | null quote received: boolean | null quote received at: string | null reminder count: number | null role: string skills added: boolean | null skills added at: string | null talent invited: boolean | null talent invited at: string | null updated at: string user id: string | null 
}Insert: {
  application sent?: boolean | null application sent at?: string | null availability set?: boolean | null availability set at?: string | null created at?: string id?: string job posted?: boolean | null job posted at?: string | null last reminder sent?: string | null match received?: boolean | null match received at?: string | null match viewed?: boolean | null match viewed at?: string | null profile completed?: boolean | null profile completed at?: string | null quote received?: boolean | null quote received at?: string | null reminder count?: number | null role: string skills added?: boolean | null skills added at?: string | null talent invited?: boolean | null talent invited at?: string | null updated at?: string user id?: string | null 
}Update: {
  application sent?: boolean | null application sent at?: string | null availability set?: boolean | null availability set at?: string | null created at?: string id?: string job posted?: boolean | null job posted at?: string | null last reminder sent?: string | null match received?: boolean | null match received at?: string | null match viewed?: boolean | null match viewed at?: string | null profile completed?: boolean | null profile completed at?: string | null quote received?: boolean | null quote received at?: string | null reminder count?: number | null role?: string skills added?: boolean | null skills added at?: string | null talent invited?: boolean | null talent invited at?: string | null updated at?: string user id?: string | null 
}Relationships: [ 
}user privacy settings: {
  Row: {
  activity monitoring enabled: boolean | null ai analysis enabled: boolean | null id: string message scanning enabled: boolean | null updated at: string | null 
}Insert: {
  activity monitoring enabled?: boolean | null ai analysis enabled?: boolean | null id: string message scanning enabled?: boolean | null updated at?: string | null 
}Update: {
  activity monitoring enabled?: boolean | null ai analysis enabled?: boolean | null id?: string message scanning enabled?: boolean | null updated at?: string | null 
}Relationships: [ 
}webhook configs: {
  Row: {
  created at: string event types: string[] id: string is active: boolean last triggered at: string | null name: string secret: string | null updated at: string url: string user id: string 
}Insert: {
  created at?: string event types: string[] id?: string is active?: boolean last triggered at?: string | null name: string secret?: string | null updated at?: string url: string user id: string 
}Update: {
  created at?: string event types?: string[] id?: string is active?: boolean last triggered at?: string | null name?: string secret?: string | null updated at?: string url?: string user id?: string 
}Relationships: [ 
}whitelabel tenants: {
  Row: {
  account manager id: string | null brand name: string created at: string | null custom domain: string | null dns verified: boolean email template override: Json | null id: string is active: boolean landing page copy: Json | null logo url: string | null primary color: string subdomain: string theme preset: string updated at: string | null 
}Insert: {
  account manager id?: string | null brand name: string created at?: string | null custom domain?: string | null dns verified?: boolean email template override?: Json | null id?: string is active?: boolean landing page copy?: Json | null logo url?: string | null primary color?: string subdomain: string theme preset?: string updated at?: string | null 
}Update: {
  account manager id?: string | null brand name?: string created at?: string | null custom domain?: string | null dns verified?: boolean email template override?: Json | null id?: string is active?: boolean landing page copy?: Json | null logo url?: string | null primary color?: string subdomain?: string theme preset?: string updated at?: string | null 
}Relationships: [ 
}work history: {
  Row: {
  company logo url: string | null company name: string created at: string description: string | null end date: string | null id: string is current: boolean location: string | null resume id: string role title: string start date: string updated at: string 
}Insert: {
  company logo url?: string | null company name: string created at?: string description?: string | null end date?: string | null id?: string is current?: boolean location?: string | null resume id: string role title: string start date: string updated at?: string 
}Update: {
  company logo url?: string | null company name?: string created at?: string description?: string | null end date?: string | null id?: string is current?: boolean location?: string | null resume id?: string role title?: string start date?: string updated at?: string 
}Relationships: [ 
}
}Views: {
  conversion rates: {
  Row: {
  conversion count: number | null conversion rate: number | null conversion type: string | null date: string | null view count: number | null 
}Relationships: [] 
}daily page views: {
  Row: {
  date: string | null path: string | null view count: number | null 
}Relationships: [] 
}user metrics: {
  Row: {
  job applications: number | null profile views: number | null quote invites: number | null success rate: number | null user id: string | null 
}Insert: {
  job applications?: never profile views?: never quote invites?: never success rate?: never user id?: string | null 
}Update: {
  job applications?: never profile views?: never quote invites?: never success rate?: never user id?: string | null 
}Relationships: [] 
}
}Returns: {
  user id: string email: string display name: string user type: string last login: string reminder type: string days since login: number onboarding status: Json 
}[] 
}Returns: undefined 
}create notification: {
  Args: {
  user id: string title: string message: string type: string related id?: string 
}Returns: string 
}p user id: string p user email: string p content type: string p content id: string p content excerpt: string p severity: string p reason: string p ip address: string 
}Returns: string 
}generate api key: {
  Args: {
  prefix: string 
}Returns: string 
}Returns: string 
}generate referral code: {
  Args: {
  user id: string 
}Returns: string 
}event type: string count: number 
}[] 
}hash api key: {
  Args: {
  api key: string 
}Returns: string 
}
}
}type DefaultSchema = Database[Extract<keyof Database, "public" >] export type Tables< DefaultSchemaTableNameOrOptions extends Row: infer R 
}? R : never : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables" ] & DefaultSchema["Views" ]) ? (DefaultSchema["Tables" ] & DefaultSchema["Views" ]) [DefaultSchemaTableNameOrOptions] extends {
  Row: infer R 
}schema: keyof Database 
}? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
  schema"]][" CompositeTypes"] : never = never;
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof Database 
}? Database[PublicCompositeTypeNameOrOptions[" schema"]][" CompositeTypes"][CompositeTypeName] : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema[" CompositeTypes"] ? DefaultSchema[" CompositeTypes" ][PublicCompositeTypeNameOrOptions]   public: {
  Enums: {
  api key scope: [ 
